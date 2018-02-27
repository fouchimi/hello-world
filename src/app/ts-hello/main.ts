class Point {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {
        return Math.sqrt(Math.pow((another.x - this.x), 2) + Math.pow((another.y - this.y), 2));
    }
}

let pointA: Point = new Point(4, 5);
let pointB: Point = new Point(2, 1);

pointA.draw();

console.log(pointA.getDistance(pointB));
