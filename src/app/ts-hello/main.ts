
import { Point } from './point';
import { LikeComponent } from './like.component';

const pointA: Point = new Point(4, 5);
const pointB: Point = new Point(2, 1);
console.log(pointA.getX);
pointA.setX = 5;

pointA.draw();

console.log('The distance is: ' + pointA.getDistance(pointB));

const likeComponent: LikeComponent = new LikeComponent(10, true);
likeComponent.onClick();
console.log('Likes Count: ' + likeComponent.likesCount);
console.log('is Selected: ' + likeComponent.isSelected);
