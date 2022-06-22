"use strict";

const obj1 = {};
const obj2 = new Object();

const obj3 = { name: "obj3", age: 4, hasJob: true };

console.log(obj3.name);
console.log(obj3["age"]);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(obj3, "name");
printValue(obj3, "hasJob");

function Person(_name, _age) {
  this.name = _name;
  this.age = _age;
}

const obj5 = new Person("obj5", 5);
printValue(obj5, "name");

console.log("name" in obj5);
console.log("nono" in obj5);

for (const key in obj3) {
  console.log(key);
}

for (const val of obj3.name) {
  console.log(val);
}

const obj6 = obj3;
//obj6.name = "obj6";

const obj7 = Object.assign(obj3, {});
console.log(obj3.name);
