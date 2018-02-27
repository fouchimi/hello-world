"use strict";
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Object.defineProperty(Point.prototype, "setX", {
        set: function (val) {
            this.x = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "getX", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getDistance = function (another) {
        return Math.sqrt(Math.pow((another.x - this.x), 2) + Math.pow((another.y - this.y), 2));
    };
    return Point;
}());
exports.Point = Point;
