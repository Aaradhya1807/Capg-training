var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hii");
var a = 1;
a = 2;
console.log(a);
//! Type annotation
var b = 10;
var c = "hello";
var d = true;
var e = 10;
console.log(b);
console.log(c);
console.log(d);
console.log(e);
//! Array and tuples
var arr = [1, 2, 3, 4, 5];
var arr1 = [10, "hi", true];
console.log(arr1);
console.log(arr);
var arr2 = [10, "hello"];
arr2.push(20, "world"); //? arr2.push(20,"world",false) //? error because arr2 is of type [number,string] and we are trying to push a boolean value
console.log(arr2);
//! objects
var obj = { name: "aarad", age: 20 }; //? if i dont give age then it will give error because age is a required property
console.log(obj);
var obj1 = { name: "aarad" }; //? if i dont give age then it will not give error because age is an optional property
console.log(obj1);
function greet(name, age) {
    if (age === void 0) { age = 20; }
    console.log("hello ".concat(name, " and age is ").concat(age));
}
greet("aaradhya", 24);
greet("aaradhya"); //? if i dont give age then it will take the default value of age which is 20
greet(); //? if i dont give name and age then it will take the default value of age which is 20 and name will be undefined
greet(undefined, 30); //? if i give undefined for name then it will take the default value of name which is undefined and age will be 30
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
//!arrow function
var sub1 = function (a, b) {
    return a - b;
};
console.log(sub1(10, 20));
//! union types
var unionType = ["efdd", 10, "hello"];
console.log(unionType);
//!readonly
var readonlyArr = [1, 2, 3, 4, 5, "hello"];
// readonlyArr.push(6); //? error because readonlyArr is a readonly array and we cannot push new elements to it
console.log(readonlyArr);
console.log(typeof (add));
console.log(typeof (arr2));
//!readonly in tuples
var readonlyTuple = [10, "hello"];
//readonlyTuple.push(20,"world"); //? error because readonlyTuple is a readonly tuple and we cannot push new elements to it
console.log(readonlyTuple);
var user = {
    name: "Aaradhya",
    age: 23,
    id: 1
};
var user2 = {
    name: "Priyanshu",
    age: 24,
    id: 2
};
console.log(user);
console.log(user2);
var Mydog = {
    name: "Tommy",
    age: 5,
    breed: "Labrador"
};
console.log(Mydog);
var myCar = {
    name: "BMW",
    model: 2020,
    sunroof: function () {
        return "sunroof is open";
    }
};
console.log(myCar);
console.log(myCar.sunroof());
console.log(typeof (myCar));
//! OOPS
//? class:
//? class is a blueprint for creating objects. It defines the properties and methods that an object can have.
// class demo{
//     //?properties
//     //?methods
//     //?constructor: constructor is a special method that is called when an object is created. It is used to initialize the properties of the object.
//     consstructor(){
//     }
// }
var Car1 = /** @class */ (function () {
    function Car1(brand, color) {
        this.brand = brand;
        this.color = color;
        this.display();
        this.display = function () {
            console.log("this is display 2");
        };
        this.display();
    }
    Car1.prototype.display = function () {
        console.log("this is display method");
    };
    Car1.prototype.start = function () {
        console.log("car is starting");
    };
    return Car1;
}());
var myCar1 = new Car1("Audi", "red");
myCar1.brand = "BMW";
myCar1.color = "black";
console.log(myCar1);
myCar1.start();
//! Access modifiers
//? public: public properties and methods can be accessed from anywhere. By default, all properties and methods are public.
//? private: private properties and methods can only be accessed within the class. They cannot be accessed from outside the class or from derived classes.
//? protected: protected properties and methods can be accessed within the class and from derived classes. They cannot be accessed from outside the class.
//! this keyword
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = "abc";
    }
    return Person1;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, company) {
        var _this = _super.call(this, name) || this;
        _this.company = "xyz";
        _this.name = name;
        _this.company = company;
        return _this;
    }
    Teacher.prototype.display = function () {
        console.log(this.company, this.name);
    };
    return Teacher;
}(Person1));
var teacher1 = new Teacher("Aaradhya", "ABC School");
teacher1.display();
