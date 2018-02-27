let message;
message = 'abc';
let endWithC = (<string>message).endsWith('c');
console.log(endWithC);
let alternativeWay = (message as string).endsWith('c');
console.log(alternativeWay);
