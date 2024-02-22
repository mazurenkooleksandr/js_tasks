// Сума елементів масива
const arr1 = [[1, 2, [3, 4]], [9], [10, 12]];

// recursive + sum
//flat + sum

const result1 = arr1.flat(Infinity).reduce((acc, next) => acc + next);

function flat(arr) {
  let res = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = [...res, ...flat(item)];
    } else {
      res.push(item);
    }
  });

  return res;
}

const result2 = flat(arr1).reduce((acc, next) => acc + next);
//console.log(result2);

// Задача на event loop

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    //console.log(i);
  }, 0);
}

//1. Рішення: заміна на let
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    //console.log(i);
  }, 0);
}

//2. Рішення: додати третій аргумент
for (let i = 0; i < 5; i++) {
  setTimeout(
    (n) => {
      console.log(n);
    },
    0,
    i
  );
}

//3. Рішення: через IIFE
for (let i = 0; i < 5; i++) {
  setTimeout((n) => {
    (function (n) {
      console.log(n);
    })(i);
  }, 0);
}

// Задача на асинхроність

console.log(1);
const a = new Promise((resolve, reject) => resolve(console.log(2)));
// a.then((res) => console(3));

setTimeout(() => {
  console.log(4);
}, 0);

console.log(5);
// 1, 2, 5, 3, 4

//fetch

const postData = {
  username: "example",
  password: "example123",
};

const result = fetch("https://api.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

async function f() {
  try {
    const result = await fetch("https://api.com");
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

// Реалізувати Promise.all
function wait(t) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, t, true);
  });
}

Promise.all([Promise.resolve(20), wait(1000), wait(3000)]).then((res) => {
  console.log(res);
});

// Рішення

function promiseAll(promises) {
  const res = [];
  const q = promises.length;
  let count = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < q; i++) {
      promises[i].then((response) => {
        res.push(response);
        count++;
        if (count === q) {
          resolve(res);
        }
      });
    }
  });
}

promiseAll([Promise.resolve(50), wait(5000), wait(1000), wait(3000)]).then(
  (res) => {
    console.log(res);
  }
);

//Сума елементів через замикання

function sum(n) {
  let acc = n;
  return function accomulate(i) {
    if (typeof i === "number") {
      acc += i;
      return accomulate;
    }
    return acc;
  };
}
console.log(sum(1)(2)(5)(87)());
