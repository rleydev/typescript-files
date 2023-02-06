var str = "hello Typescript";
var isAct = false;
var strArray = ['h', 'd', 's'];
var numArray = [1, 3, 5, 8, 4];
// Functions
function logInfo(name, age) {
    console.log('Info: ${name}, ${age}');
}
logInfo('Arthur', 25);
function calc(a, b) {
    if (typeof b === 'string')
        b = +b;
    return a + b;
}
console.log(calc(2, 4));
// Class ES6
var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        this.status = "working";
    }
    Server.prototype.turnOn = function () {
        this.status = "working";
    };
    Server.prototype.turnOff = function () {
        this.status = "offline";
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0.3';
    return Server;
}());
var server = new Server("AWS", 1234);
var user = {
    name: 'Vladilen',
    age: 25,
    logInfo: function () {
        console.log(this.name + '' + this.age);
    }
};
var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.sayHello = function () {
        console.log(this.name + 'Hello!');
    };
    return Human;
}());
// Generics
var arr = [1, 2, 3, 4];
var users1 = [
    { id: 1, name: "V", age: 2 },
    { id: 2, name: "E", age: 23 }
];
var users2 = [
    { id: 1, name: "V", age: 2 },
    { id: 2, name: "E", age: 23 }
];
