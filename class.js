"use strict";

class Person {
  static p = "aa";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }

  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const print = (msg) => console.log(msg);

const me = new Person("me", 20);
console.log(`name: ${me.name}, age: ${me.age}`);

const user1 = new Person("Steve", -1);
print(`name: ${user1.name}, age: ${user1.age} p: ${Person.p}`);
