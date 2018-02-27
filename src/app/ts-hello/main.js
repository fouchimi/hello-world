"use strict";
var point_1 = require('./point');
var pointA = new point_1.Point(4, 5);
var pointB = new point_1.Point(2, 1);
console.log(pointA.getX);
pointA.setX = 5;
pointA.draw();
console.log('The distance is: ' + pointA.getDistance(pointB));
