"use strict";

let Activity = require("./activity");
let util = require("util");
let _ = require("lodash");
let is = require("../common/is");
let Block = require("./block");
let WithBody = require("./withBody");

function ForEach() {
    WithBody.call(this);

    this.items = null;
    this.varName = "item";
    this.parallel = false;
    this._bodies = null;
}

util.inherits(ForEach, WithBody);

ForEach.prototype.initializeStructure = function() {
    if (this.parallel) {
        let numCPUs = require("os").cpus().length;
        this._bodies = [];
        if (this.args && this.args.length) {
            for (let i = 0; i < Math.min(process.env.UV_THREADPOOL_SIZE || 100000, numCPUs); i++) {
                let newArgs = [];
                for (let arg of this.args) {
                    if (arg instanceof Activity) {
                        newArgs.push(arg.clone());
                    }
                    else {
                        newArgs.push(arg);
                    }
                }
                let newBody = new Block();
                newBody.args = newArgs;
                this._bodies.push(newBody);
            }
        }
        this.args = null;
    }
    else {
        WithBody.prototype.initializeStructure.call(this);
    }
};

ForEach.prototype.run = function (callContext, args) {
    const varName = this.get("varName");
    let items = this.get("items");
    if (!_.isNull(items)) {
        this.set(varName, null);
        callContext.schedule(items, "_itemsGot");
    }
    else {
        callContext.complete();
    }
};

ForEach.prototype._itemsGot = function (callContext, reason, result) {
    if (reason === Activity.states.complete && !_.isUndefined(result)) {
        this.set("_todo", _.isArray(result) ? result : [ result ]);
        callContext.activity._doStep.call(this, callContext);
    }
    else {
        callContext.to(reason, result);
    }
};

ForEach.prototype._doStep = function (callContext, lastResult) {
    const varName = this.get("varName");
    let todo = this.get("_todo");
    if (todo && todo.length) {
        if (this.get("parallel")) {
            let bodies = this.get("_bodies");
            let pack = [];
            let idx = 0;
            while (todo.length && idx < bodies.length) {
                let item = todo[0];
                todo.splice(0, 1);
                let variables = {};
                variables[varName] = item;
                pack.push({
                    variables: variables,
                    activity: bodies[idx++]
                });
            }
            callContext.schedule(pack, "_bodyFinished");
        }
        else {
            let item = todo[0];
            todo.splice(0, 1);
            let variables = {};
            variables[varName] = item;
            callContext.schedule({ activity: this.get("_body"), variables: variables }, "_bodyFinished");
        }
    }
    else {
        callContext.complete(lastResult);
    }
};

ForEach.prototype._bodyFinished = function (callContext, reason, result) {
    if (reason === Activity.states.complete) {
        callContext.activity._doStep.call(this, callContext, result);
    }
    else {
        callContext.end(reason, result);
    }
};

module.exports = ForEach;