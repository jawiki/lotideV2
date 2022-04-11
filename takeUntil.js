const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const result = takeUntil(data1, x => x < 0);

const takeUntil = function(array, callback) {
  const result = [];
  for (const items of array) {
    if (callback(items)) {
      result.push(items)
    }
    return result;
  }
};

console.log(result);