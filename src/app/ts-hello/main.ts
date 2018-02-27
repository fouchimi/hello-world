interface Point {
    // tslint:disable-next-line:semicolon
    x: number,
    // tslint:disable-next-line:semicolon
    y: number
}

let drawPoint = (point: Point) => {
    console.log('x axis value:' + point.x);
};

drawPoint({x: 1,  y: 2});
