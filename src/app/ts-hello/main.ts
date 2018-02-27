class Point {
    constructor(private x?: number, private y?: number) {}

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    set setX(val) {
        this.x = val;
    }

    get getX() {
        return this.x;
    }

    getDistance(another: Point) {
        return Math.sqrt(Math.pow((another.x - this.x), 2) + Math.pow((another.y - this.y), 2));
    }
}

let pointA: Point = new Point(4, 5);
let pointB: Point = new Point(2, 1);
console.log(pointA.getX);
pointA.setX = 5;

pointA.draw();

console.log('The distance is: ' + pointA.getDistance(pointB));
