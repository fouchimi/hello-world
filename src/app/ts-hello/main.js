function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log("Finally " + i);
}
doSomething();
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
;
var backgroundColor = Color.Green;
console.log(backgroundColor);
