// 1.Task

function sum(n) {
  console.log(n);
  return function (a) {
    return sum(a + n);
  };
}

sum(5);
sum(2)(3)(4)(6)(8);

// 2.Task

const margeSameKeysOfObjects = (obj1, obj2) => {
  let keyOfObject1 = Object.keys(obj1);
  let keyOfObject2 = Object.keys(obj2);

  for (let i = 0; i < keyOfObject1.length; i++) {
    let key1 = keyOfObject1[i];

    for (let j = 0; j < keyOfObject2.length; j++) {
      let key2 = keyOfObject2[j];

      if (key1 === key2) {
        obj1[key1] = obj2[key2];
      }
    }
  }
  console.log(obj1);
};

margeSameKeysOfObjects(
  { foo: "foo", bar: "bar" },
  { bar: "foo", same: "same" }
);

const margeSameKeysOfObjects1 = (obj1, obj2) => {
  for (key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }
  console.log(obj1);
};

margeSameKeysOfObjects1(
  { foo: "foo", bar: "11bar" },
  { bar: "foo", same: "same" }
);

// 3. Task

function groupBy(arr, callbackFunction) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const num = callbackFunction(arr[i]);
    if (obj.hasOwnProperty(num)) {
      obj[num].push(arr[i]);
    } else {
      obj[num] = [arr[i]];
    }
  }
  console.log(obj);
}

groupBy([6.1, 4.3, 6.3], Math.floor);

function groupBy1(arr, callbackFunction) {
  const obj = {};
  arr.forEach((item) => {
    const num = callbackFunction(item);
    obj.hasOwnProperty(num) ? obj[num].push(item) : (obj[num] = [item]);
  });
  console.log(obj);
}
groupBy1([6.1, 4.3, 6.3], Math.floor);
