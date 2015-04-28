"use strict";
var _ = require("lodash");
var is = require("../common/is");
var fast = require("fast.js");
function InstanceIdParser() {
  this._cache = {};
}
InstanceIdParser.prototype.parse = function(path, obj) {
  if (!obj)
    throw new Error("Argument 'obj' expected.");
  if (!_(path).isString())
    throw new TypeError("Argument 'path' is not a string.");
  var parser = this._cache[path];
  if (is.undefined(parser))
    this._cache[path] = parser = this._createParser(path);
  var result = fast.try(function() {
    return parser.call(obj);
  });
  if (!(result instanceof Error))
    return result;
};
InstanceIdParser.prototype._createParser = function(path) {
  if (path.indexOf("this") != 0) {
    if (path[0] === "[") {
      path = "this" + path;
    } else {
      path = "this." + path;
    }
  }
  return new Function("return (" + path + ").toString();");
};
module.exports = InstanceIdParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlSWRQYXJzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxBQUFJLEVBQUEsQ0FBQSxDQUFBLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQztBQUN6QixBQUFJLEVBQUEsQ0FBQSxFQUFDLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxjQUFhLENBQUMsQ0FBQztBQUNoQyxBQUFJLEVBQUEsQ0FBQSxJQUFHLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQztBQUU3QixPQUFTLGlCQUFlLENBQUUsQUFBRCxDQUFHO0FBQ3hCLEtBQUcsT0FBTyxFQUFJLEdBQUMsQ0FBQztBQUNwQjtBQUFBLEFBRUEsZUFBZSxVQUFVLE1BQU0sRUFBSSxVQUFVLElBQUcsQ0FBRyxDQUFBLEdBQUUsQ0FBRztBQUNwRCxLQUFJLENBQUMsR0FBRTtBQUFHLFFBQU0sSUFBSSxNQUFJLEFBQUMsQ0FBQywwQkFBeUIsQ0FBQyxDQUFDO0FBQUEsQUFDckQsS0FBSSxDQUFDLENBQUEsQUFBQyxDQUFDLElBQUcsQ0FBQyxTQUFTLEFBQUMsRUFBQztBQUFHLFFBQU0sSUFBSSxVQUFRLEFBQUMsQ0FBQyxrQ0FBaUMsQ0FBQyxDQUFDO0FBQUEsQUFFNUUsSUFBQSxDQUFBLE1BQUssRUFBSSxDQUFBLElBQUcsT0FBTyxDQUFFLElBQUcsQ0FBQyxDQUFDO0FBQzlCLEtBQUksRUFBQyxVQUFVLEFBQUMsQ0FBQyxNQUFLLENBQUM7QUFBRyxPQUFHLE9BQU8sQ0FBRSxJQUFHLENBQUMsRUFBSSxDQUFBLE1BQUssRUFBSSxDQUFBLElBQUcsY0FBYyxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7QUFBQSxBQUUzRSxJQUFBLENBQUEsTUFBSyxFQUFJLENBQUEsSUFBRyxJQUFJLEFBQUMsQ0FBQyxTQUFVLEFBQUQsQ0FBRztBQUM5QixTQUFPLENBQUEsTUFBSyxLQUFLLEFBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQztFQUMzQixDQUFDLENBQUM7QUFFRixLQUFJLENBQUMsQ0FBQyxNQUFLLFdBQWEsTUFBSSxDQUFDO0FBQUcsU0FBTyxPQUFLLENBQUM7QUFBQSxBQUNqRCxDQUFBO0FBRUEsZUFBZSxVQUFVLGNBQWMsRUFBSSxVQUFVLElBQUcsQ0FBRztBQUN2RCxLQUFJLElBQUcsUUFBUSxBQUFDLENBQUMsTUFBSyxDQUFDLENBQUEsRUFBSyxFQUFBLENBQUc7QUFDM0IsT0FBSSxJQUFHLENBQUUsQ0FBQSxDQUFDLElBQU0sSUFBRSxDQUFHO0FBQ2pCLFNBQUcsRUFBSSxDQUFBLE1BQUssRUFBSSxLQUFHLENBQUM7SUFDeEIsS0FDSztBQUNELFNBQUcsRUFBSSxDQUFBLE9BQU0sRUFBSSxLQUFHLENBQUM7SUFDekI7QUFBQSxFQUNKO0FBQUEsQUFFQSxPQUFPLElBQUksU0FBTyxBQUFDLENBQUMsVUFBUyxFQUFJLEtBQUcsQ0FBQSxDQUFJLGdCQUFjLENBQUMsQ0FBQztBQUM1RCxDQUFBO0FBRUEsS0FBSyxRQUFRLEVBQUksaUJBQWUsQ0FBQztBQUNqQyIsImZpbGUiOiJob3N0aW5nL2luc3RhbmNlSWRQYXJzZXIuanMiLCJzb3VyY2VSb290IjoiQzovR0lUL3dvcmtmbG93LTQtbm9kZS9saWIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF8gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xyXG52YXIgaXMgPSByZXF1aXJlKFwiLi4vY29tbW9uL2lzXCIpO1xyXG52YXIgZmFzdCA9IHJlcXVpcmUoXCJmYXN0LmpzXCIpO1xyXG5cclxuZnVuY3Rpb24gSW5zdGFuY2VJZFBhcnNlcigpIHtcclxuICAgIHRoaXMuX2NhY2hlID0ge307XHJcbn1cclxuXHJcbkluc3RhbmNlSWRQYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHBhdGgsIG9iaikge1xyXG4gICAgaWYgKCFvYmopIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50ICdvYmonIGV4cGVjdGVkLlwiKTtcclxuICAgIGlmICghXyhwYXRoKS5pc1N0cmluZygpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgJ3BhdGgnIGlzIG5vdCBhIHN0cmluZy5cIik7XHJcblxyXG4gICAgdmFyIHBhcnNlciA9IHRoaXMuX2NhY2hlW3BhdGhdO1xyXG4gICAgaWYgKGlzLnVuZGVmaW5lZChwYXJzZXIpKSB0aGlzLl9jYWNoZVtwYXRoXSA9IHBhcnNlciA9IHRoaXMuX2NyZWF0ZVBhcnNlcihwYXRoKTtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gZmFzdC50cnkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZXIuY2FsbChvYmopO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCEocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpKSByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5JbnN0YW5jZUlkUGFyc2VyLnByb3RvdHlwZS5fY3JlYXRlUGFyc2VyID0gZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgIGlmIChwYXRoLmluZGV4T2YoXCJ0aGlzXCIpICE9IDApIHtcclxuICAgICAgICBpZiAocGF0aFswXSA9PT0gXCJbXCIpIHtcclxuICAgICAgICAgICAgcGF0aCA9IFwidGhpc1wiICsgcGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBcInRoaXMuXCIgKyBwYXRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwicmV0dXJuIChcIiArIHBhdGggKyBcIikudG9TdHJpbmcoKTtcIik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW5zdGFuY2VJZFBhcnNlcjtcclxuIl19