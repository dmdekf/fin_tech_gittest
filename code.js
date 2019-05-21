var length = 16;
var lastName = "yun"
var x = {firstName : 'ji', lastName:"Doe"};

var x = 16 + 'Volvo';
console.log(x);

var y = "16" + "Volvo";

function sum(p1, p2) {
    return p1 + p2;
};

console.log(sum(1,2));

function insum(p1, p2) {
    return p1 - p2;
};

console.log(insum(1, 3));

function complex(p1, p2) {
    return p1 * p2;
};

console.log(complex(1, 3));

var car = {
    name : "Fiat",
    model : 500,
    weight : 850+"kg",
    color : "white"
};

console.log(car.name, car.model, car.weight);
console.log(car);



var cars = ["Saab", "Volvo", "BMW"];

console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log('End')
// var text = "";
var i ;

for (i = 0; i < cars.length ; i++) {
    console.log(cars[i])
}