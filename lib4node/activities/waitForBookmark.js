"use strict";
var Activity = require("./activity");
var util = require("util");
function WaitForBookmark() {
  Activity.call(this);
  this.bookmarkName = "";
}
util.inherits(WaitForBookmark, Activity);
WaitForBookmark.prototype.run = function(callContext, args) {
  var bookmarkName = this.get("bookmarkName");
  if (!bookmarkName) {
    callContext.fail(new Error("WaitForBookmark activity's property 'bookmarkName' is not a non-empty string."));
    return ;
  }
  callContext.createBookmark(bookmarkName, "_bmReached");
  callContext.idle();
};
WaitForBookmark.prototype._bmReached = function(callContext, reason, result) {
  callContext.end(reason, result);
};
module.exports = WaitForBookmark;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRGb3JCb29rbWFyay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEFBQUksRUFBQSxDQUFBLFFBQU8sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFlBQVcsQ0FBQyxDQUFDO0FBQ3BDLEFBQUksRUFBQSxDQUFBLElBQUcsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0FBRTFCLE9BQVMsZ0JBQWMsQ0FBRSxBQUFELENBQUc7QUFDdkIsU0FBTyxLQUFLLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztBQUNuQixLQUFHLGFBQWEsRUFBSSxHQUFDLENBQUM7QUFDMUI7QUFBQSxBQUVBLEdBQUcsU0FBUyxBQUFDLENBQUMsZUFBYyxDQUFHLFNBQU8sQ0FBQyxDQUFDO0FBRXhDLGNBQWMsVUFBVSxJQUFJLEVBQUksVUFBVSxXQUFVLENBQUcsQ0FBQSxJQUFHLENBQUc7QUFDekQsQUFBSSxJQUFBLENBQUEsWUFBVyxFQUFJLENBQUEsSUFBRyxJQUFJLEFBQUMsQ0FBQyxjQUFhLENBQUMsQ0FBQztBQUUzQyxLQUFJLENBQUMsWUFBVyxDQUFHO0FBQ2YsY0FBVSxLQUFLLEFBQUMsQ0FBQyxHQUFJLE1BQUksQUFBQyxDQUFDLCtFQUE4RSxDQUFDLENBQUMsQ0FBQztBQUM1RyxXQUFNO0VBQ1Y7QUFBQSxBQUVBLFlBQVUsZUFBZSxBQUFDLENBQUMsWUFBVyxDQUFHLGFBQVcsQ0FBQyxDQUFDO0FBQ3RELFlBQVUsS0FBSyxBQUFDLEVBQUMsQ0FBQztBQUN0QixDQUFBO0FBRUEsY0FBYyxVQUFVLFdBQVcsRUFBSSxVQUFVLFdBQVUsQ0FBRyxDQUFBLE1BQUssQ0FBRyxDQUFBLE1BQUssQ0FBRztBQUMxRSxZQUFVLElBQUksQUFBQyxDQUFDLE1BQUssQ0FBRyxPQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFBO0FBRUEsS0FBSyxRQUFRLEVBQUksZ0JBQWMsQ0FBQztBQUNoQyIsImZpbGUiOiJhY3Rpdml0aWVzL3dhaXRGb3JCb29rbWFyay5qcyIsInNvdXJjZVJvb3QiOiJDOi9HSVQvd29ya2Zsb3ctNC1ub2RlL2xpYi8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWN0aXZpdHkgPSByZXF1aXJlKFwiLi9hY3Rpdml0eVwiKTtcclxudmFyIHV0aWwgPSByZXF1aXJlKFwidXRpbFwiKTtcclxuXHJcbmZ1bmN0aW9uIFdhaXRGb3JCb29rbWFyaygpIHtcclxuICAgIEFjdGl2aXR5LmNhbGwodGhpcyk7XHJcbiAgICB0aGlzLmJvb2ttYXJrTmFtZSA9IFwiXCI7XHJcbn1cclxuXHJcbnV0aWwuaW5oZXJpdHMoV2FpdEZvckJvb2ttYXJrLCBBY3Rpdml0eSk7XHJcblxyXG5XYWl0Rm9yQm9va21hcmsucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIChjYWxsQ29udGV4dCwgYXJncykge1xyXG4gICAgdmFyIGJvb2ttYXJrTmFtZSA9IHRoaXMuZ2V0KFwiYm9va21hcmtOYW1lXCIpO1xyXG5cclxuICAgIGlmICghYm9va21hcmtOYW1lKSB7XHJcbiAgICAgICAgY2FsbENvbnRleHQuZmFpbChuZXcgRXJyb3IoXCJXYWl0Rm9yQm9va21hcmsgYWN0aXZpdHkncyBwcm9wZXJ0eSAnYm9va21hcmtOYW1lJyBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nLlwiKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxDb250ZXh0LmNyZWF0ZUJvb2ttYXJrKGJvb2ttYXJrTmFtZSwgXCJfYm1SZWFjaGVkXCIpO1xyXG4gICAgY2FsbENvbnRleHQuaWRsZSgpO1xyXG59XHJcblxyXG5XYWl0Rm9yQm9va21hcmsucHJvdG90eXBlLl9ibVJlYWNoZWQgPSBmdW5jdGlvbiAoY2FsbENvbnRleHQsIHJlYXNvbiwgcmVzdWx0KSB7XHJcbiAgICBjYWxsQ29udGV4dC5lbmQocmVhc29uLCByZXN1bHQpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFdhaXRGb3JCb29rbWFyaztcclxuIl19