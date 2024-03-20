"use strict";
// const outer = () => {
//     let outerVar = 'outer';
//     console.log(outerVar);

//     function inner(){
//         console.log(`inner function -${outerVar}`);
//     }
//     inner()
// }

// outer();

// const min = function(a, b){
//     return Math.min(a, b)
// }
// console.log(min(0,10));
// console.log(min(0,-10))

// const playerOne = {
//     name: 'tim',
//     marker: 'X'
// };

// const playerTwo ={
//     name: 'jenn',
//     marker: 'O'
// };

// const printName = function(player) {
//     console.log(player.name);
// }

// printName(playerOne);

// const gameOver = function(winningPlayer) {
//     console.log('Congratulations');
//     console.log(winningPlayer.name + ' is the winner!');
// }

// gameOver(playerTwo);

// OBJECTS AND OBJECT CONSTRUCTORS
// Constructing Objects Using and Object Literal
// const book = {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     pages: 295,
//     read: 'not read yet',
//     info() {
//         return (`${this.title} by ${this.author} ${this.pages} pages, ${this.read}`)
//     }
// }

// const theHobbit = book;
// console.log(theHobbit.info());

// Constructor Functions: Prototypal Inheritance

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

// }

// const ichigo = new Person('Ichigo', 1999);
// console.log(ichigo)

// Person.prototype.calcAge = function () {
//     return 2024-this.birthYear;
// }

// console.log(ichigo.calcAge());

// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// console.log(bmw, mercedes);

// Car.prototype.accelerate = function(){
//     return this.speed += 10;
// }

// Car.prototype.brake = function(){
//     return this.speed -= 5;
// }

// console.log(bmw.accelerate(), bmw.brake());
// console.log(mercedes.accelerate(), mercedes.brake());

// ES6 Classes
// Declaration
// class PersonCl {
//     constructor(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     calcAge(){
//         return 2037-this.birthYear;
//     }
// }

// const nel = new PersonCl ('Nel', 1995);
// console.log(nel);

// console.log(nel.calcAge());

// Expression
// const PersonClEx = class{
//     constructor(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     calcAge(){
//         return 2037-this.birthYear;
//     }
// }

// const nanami = new PersonClEx ('Nanami', 1992);
// console.log(nanami)
// console.log(nanami.calcAge());

// OOP: Setters and Getters

// const language = {
//     set current(name) {
//         this.log.push(name);
//     },
//     log: [],
// }

// language.current = 'EN';
// console.log(language.log)

// const account = {
//     owner: 'kusabe',
//     movements: [100, 400, 530, 200],

//     get latest () {
//         return this.movements.slice(-1).pop();
//     },

//     set earliest (mov) {
//         this.movements.unshift(mov);

//     }
// }

// account.earliest = 50;
// console.log(account.movements);
// console.log(account.latest);

// // OOP: Getters and Setters in class

// class classWithGetterAndSetter {
//     #msg = 'hello world';

//     get msg () {
//         return this.#msg;
//     }

//     set msg (x) {
//         this.#msg = `hello ${x}`;
//     }
// }

// const instance = new classWithGetterAndSetter();
// console.log(instance.msg);

// // OOP: Object.create() method
// const PersonProto = {
//     calcAge() {
//         return 2037 - this.birthYear;
//     },
//     initer (firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const sarah = Object.create(PersonProto);
// sarah.initer('Sarah', 1999);
// console.log(sarah.calcAge());

// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         return `${this.make} is accelerating at ${this.speed} km/h`;
//     }

//     brake(){
//         this.speed -= 5;
//         return `${this.make} is braking at ${this.speed} km/h`;
//     }

//     get speedUS () {
//         return this.speed / 1.6;
//     return `${this.speed} mi/h`;
//     }
//     set speedUS (speed){
//         this.speed = speed * 1.6;
//         // return `${this.speed} km/h`;

//     }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS)
// console.log(ford.accelerate());
// console.log(ford.brake());

// const addTax = function (rate) {
//     return function (value) {
//         return value + value * rate;
//     }
// }

// const addTax2 = addTax(0.23);
// console.log(addTax2(100));

// const greet = greeting => name => {console.log(`${greeting} ${name}`);
// }

// greet('Hello')('Hieal')

// OOP: Inheritance between Classes Using Constructor Functions
// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// const kuchiki = new Person('Kuchiki', 1992);

// Person.prototype.calcAge = function () {
//     return `I am ${2037 - this.birthYear} years old`;
// }

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// }

// Student.prototype = Object.create(Person.prototype);

// const renji = new Student('Renji', 2000, 'Statistics');
// Student.prototype.introduce = function () {
//     return`Hello, my name is ${this.firstName} and I study ${this.course}`
// }

// console.log(renji.introduce());
// console.log(renji.calcAge());

// const Car = function(make, speed){
//         this.make = make;
//         this.speed = speed;
// }

// const Ev = function(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }
// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.chargeBattery = function (chargeTo) {
//     this.chargeTo = chargeTo;
// }

// Car.prototype.accelerate = function (){
//     this.speed += 20;
//     this.charge -= 1;
//     return `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`;
// }

// const tesla = new Ev('Tesla', 120, 22);
// console.log(tesla.accelerate());

// OPP: Inheritance between Classes: ES6 Classes

// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
//     calcAge() {
//         return 2037 - this.birthYear;
//     }
//     greet() {
//         return `Hello, my name is ${this.firstName}.`;
//     }
//     introduce() {
//         return `I am ${this.firstName}, ${this.calcAge()} years old, and study ${this.course}.`
//     }
// }

// class StudentCl extends PersonCl {
//     constructor(firstName, birthYear, course) {
//         super(firstName, birthYear);
//         this.course = course;
//     }
// }

// const bruce = new StudentCl('Bruce', 2000, 'STEM');
// console.log(bruce.greet());
// console.log(bruce.introduce());

// OPP: Inheritance between Classes: Object.create()
// const PersonProto = {
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
//   calcAge() {
//     return 2037 - this.birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);
// const barry = Object.create(StudentProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   return `I am ${this.firstName}, ${this.calcAge()} years old, and study ${
//     this.course
//   }.`;
// };

// barry.init("Barry", 2001, "STEM");
// console.log(barry.introduce());

// const arr = ["a", "b", "c", "d", "e"];
// const splicedArr = arr.splice(3, 1, "D");
// console.log(splicedArr);

// console.log(arr);

// const cmToIn = function (length) {
//   return length / 2.54;
// };

// const inToCm = function (length) {
//   return length * 2.54;
// };

// const convert = function (func, length) {
//   return func(length);
// };

// console.log(convert(cmToIn, 10));

// class Person {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }

//   increaseAge(){
//     return this.age++;
//   }
// }

// const john = new Person ('John', 25);
// console.log(john.increaseAge());
// console.log(john.increaseAge());
// const movements = [50, 100, 400, 900, -200, 1000, -300];

// movements.forEach(function (element, index, array) {
//   console.log(
//     element > 0
//       ? `You have made a deposit of $${element}`
//       : `You have made a withdrawal of $${Math.abs(element)}`
//   );
// });

// const currencies = new Map([
//   ["USD", "United States Dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound Sterling"],
// ]);

// currencies.forEach(function (val, key, map) {
//   console.log(`The currency abbreviation ${key} is the ${val}`);
// });

const btn = document.getElementById("btnRate");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  const rates = document.getElementsByName("rate");
  rates.forEach((rate) => {
    if (rate.checked) {
      output.innerText = `You have selected: ${rate.value}`;
    }
  });
});
