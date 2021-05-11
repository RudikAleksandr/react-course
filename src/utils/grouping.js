const groupByKey = (key, arr) => {
  const obj = {};
  arr.forEach((item) => {
    obj[item[key]] = item;
  });

  return obj;
};

export {
  groupByKey,
};
