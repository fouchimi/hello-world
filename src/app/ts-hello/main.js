var Point = (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        return Math.sqrt(Math.pow((another.x - this.x), 2) + Math.pow((another.y - this.y), 2));
    };
    return Point;
}());
var pointA = new Point();
var pointB = new Point();
pointA.x = 4;
pointA.y = 5;
pointA.draw();
pointB.x = 2;
pointB.y = 1;
console.log(pointA.getDistance(pointB));
