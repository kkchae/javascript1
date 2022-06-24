" use strict";

// state : pending -> fullfilled or rejected

// 1. Producer
/* const promise = new Promise((resolve, reject) => {
  console.log("doing something...");
  setTimeout(() => {
    resolve(`ellie`);
    //reject(new Error("no network"));
  }, 2000);
}); */

// 2. Consumer: then, catch, finally
/* promise
  .then((value) => {
    console.log(value);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  })
  .finally(() => {
    console.log("finally");
  }); */

// 3. Promise chaining
/* const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => {
    return num * 2;
  })
  .then((num) => {
    return num * 3;
  })
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => {
    console.log(num);
  }); */

// 4. Error handling
const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hen"), 1000);
  });
};

const getEgg = (hen) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve(`${hen} => egg`);
      reject(new Error(`${hen} => egg`));
    }, 1000);
  });
};

const cook = (egg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fried egg`), 1000);
  });
};

getHen()
  //.then((hen) => getEgg(hen))
  .then(getEgg)
  .catch((error) => {
    return "bread";
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log);
