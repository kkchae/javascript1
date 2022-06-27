"use strict";

// 1. async
async function fetchUser() {
  return "ellie";
}

const user = fetchUser();
//console.log(user);
//user.then(console.log);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "Apple";
}

async function getBanana() {
  await delay(1000);
  return "Banana";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits() //
  .then((val) => console.log(`pickFruits : ${val}`));

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]) //
    .then((fruits) => fruits.join(" + "));
}
pickAllFruits() //
  .then((val) => console.log(`pickAllFruits : ${val}`));

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne() //
  .then((val) => console.log(`pickOnlyOne : ${val}`));
