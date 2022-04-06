const eqObjects = function (obj1, obj2) {
  const keysArr1 = Object.keys(obj1)
  const keysArr2 = Object.keys(obj2)
  if (keysArr1.length !== keysArr2.length) {
    return false;
  }
  for (const key of keysArr1) {
    if (Array.isArray(obj1[key])) {
      if (eqArrays(obj1[key]), obj2[key]) {
        continue;
      } else {
        return false;
      }
    }
    if (obj1[key] === obj2[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false