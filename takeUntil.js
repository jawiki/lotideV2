const takeUntil = function(array, callback) {
  const result = [];
  for (const items of array) {
    if (callback(items)) {
      result.push(items)
    }
    return result;
  }
};

}}