console.log("hii");

let a=1;
a=2;
console.log(a);

//! Type annotation
let b:number=10
let c:string="hello"
let d:boolean=true
let e:any=10
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//! Array and tuples

let arr:number[]=[1,2,3,4,5];
let arr1:any[]=[10,"hi",true];
console.log(arr1);
console.log(arr);



let arr2:[number,string]=[10,"hello"];
arr2.push(20,"world"); //? arr2.push(20,"world",false) //? error because arr2 is of type [number,string] and we are trying to push a boolean value
console.log(arr2);


//! objects
let obj:{name:string,age:number}={name:"aarad",age:20}; //? if i dont give age then it will give error because age is a required property
console.log(obj);

let obj1:{name:string,age?:number}={name:"aarad"}; //? if i dont give age then it will not give error because age is an optional property
console.log(obj1);


function greet (name?:string, age:number=20){
    console.log(`hello ${name} and age is ${age}`);
}
greet("aaradhya", 24);
greet("aaradhya"); //? if i dont give age then it will take the default value of age which is 20
greet(); //? if i dont give name and age then it will take the default value of age which is 20 and name will be undefined
greet(undefined, 30); //? if i give undefined for name then it will take the default value of name which is undefined and age will be 30

function add(a:number,b:number):number{
    return a+b; 
}
console.log(add(10,20));




//!arrow function
let sub1=(a:number,b:number):number=>{
    return a-b;
}
console.log(sub1(10,20));


//! union types
let unionType:(number|string)[]=["efdd",10,"hello"];
console.log(unionType);

//!readonly
let readonlyArr:readonly (number|string)[]=[1,2,3,4,5,"hello"];
// readonlyArr.push(6); //? error because readonlyArr is a readonly array and we cannot push new elements to it
console.log(readonlyArr);


console.log(typeof(add));
console.log(typeof(arr2));


//!readonly in tuples
let readonlyTuple:readonly [number,string]=[10,"hello"];
//readonlyTuple.push(20,"world"); //? error because readonlyTuple is a readonly tuple and we cannot push new elements to it
console.log(readonlyTuple);


//!interface 

interface Person{
    name:string;
    age:number;
    sex?:string;
    readonly id:number;
}

let user:Person={
    name:"Aaradhya",
    age:23,
    id:1

}

let user2:Person={
    name:"Priyanshu",
    age:24,
    id:2
}

console.log(user);
console.log(user2);




//! extends keyword

interface  Animal{
    name:string;
    age:number;
}

interface Dog extends Animal{
    breed:string;
}   

let Mydog:Dog={
    name:"Tommy",
    age:5,
    breed:"Labrador"
}

console.log(Mydog);


//!methods in interface

interface Car{
    name:string;
    model:number;
    sunroof():string;
}

let myCar:Car={
    name:"BMW",
    model:2020,
    sunroof(){
        return "sunroof is open";
    }}

console.log(myCar);
console.log(myCar.sunroof());
console.log(typeof(myCar));


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

class Car1{
    brand:string;
    color:string;
    display():void{
        console.log("this is display method");
    }
    constructor(brand:string,color:string){
        this.brand=brand;
        this.color=color;
        this.display();
        this.display=()=>{
            console.log("this is display 2");
        };
        this.display();
    }

    start():void{
        console.log("car is starting");
    }
}

let myCar1=new Car1("Audi","red");
myCar1.brand="BMW";
myCar1.color="black";
console.log(myCar1);
myCar1.start();



//! Access modifiers
//? public: public properties and methods can be accessed from anywhere. By default, all properties and methods are public.
//? private: private properties and methods can only be accessed within the class. They cannot be accessed from outside the class or from derived classes.
//? protected: protected properties and methods can be accessed within the class and from derived classes. They cannot be accessed from outside the class.



//! this keyword

class Person1{
    name:string="abc"
    constructor(name:string){
}}

class Teacher extends Person1{
    company:string="xyz"
    constructor(name:string,company:string){
        super(name);
        this.name=name;
        this.company=company;
        

    }
    display(){
    console.log(this.company, this.name);
    
}
}

let teacher1=new Teacher("Aaradhya","ABC School");
teacher1.display();



//! primitu=ive types vs reference types

//? primitive types: primitive types are the basic data types in TypeScript. They include number, string, boolean, null, undefined, symbol and bigint. Primitive types are immutable, which means that their values cannot be changed once they are created.
//? reference types: reference types are the complex data types in TypeScript. They include objects, arrays, functions and classes. Reference types are mutable, which means that their values can be changed after they are created.


