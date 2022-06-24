// 1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthData: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key- ${key}, value- ${value}`);
  return value;
});

// 2. JSON to Object
console.clear();
const obj = JSON.parse(json);
console.log(obj);

rabbit.birthData.getDate();
//obj.birthData.getData();
