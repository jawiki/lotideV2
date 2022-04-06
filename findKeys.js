const findKey = (o, c) => {
  for (let k in o) if (c(o[k])) return k;
};

