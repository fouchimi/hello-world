
import { Point } from './point';

const pointA: Point = new Point(4, 5);
const pointB: Point = new Point(2, 1);
console.log(pointA.getX);
pointA.setX = 5;

pointA.draw();

console.log('The distance is: ' + pointA.getDistance(pointB));
