class Point {
    x: number;
    y: number;

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {
        return Math.sqrt(Math.pow((another.x - this.x), 2) + Math.pow((another.y - this.y), 2));
    }
}

let pointA: Point = new Point();
let pointB: Point = new Point();
pointA.x = 4;
pointA.y = 5;

pointA.draw();

pointB.x = 2;
pointB.y = 1;

console.log(pointA.getDistance(pointB));
