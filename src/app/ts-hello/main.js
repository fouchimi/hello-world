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
var pointA = new Point(4, 5);
var pointB = new Point(2, 1);
console.log(pointA.getX);
pointA.setX = 5;
pointA.draw();
console.log('The distance is: ' + pointA.getDistance(pointB));
