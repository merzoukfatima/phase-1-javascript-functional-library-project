const toArray = function () {
  return typeof this === "object" ? Object.values(this) : this;
};
const myEach = (collection, callback) => {
  const array = toArray.call(collection);
  array.forEach((element) => {
    callback(element);
  });
  return collection;
};
const myMap = (collection, callback) => {
  const array = toArray.call(collection);
  return array.map((element) => callback(element));
};
const myReduce = (collection, callback, acc) => {
  let array = toArray.call(collection);
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  return array.reduce((total, element) => callback(total, element), acc);
};

const myFind = (collection, predicate) => {
  const array = toArray.call(collection);
  return array.find((element) => predicate(element));
};

const myFilter = (collection, predicate) => {
  const array = toArray.call(collection);
  return array.filter((element) => predicate(element));
};
const mySize = (collection) => {
  const array = toArray.call(collection);
  return array.length;
};
const myFirst = (array, n) => {
  return n === undefined ? array[0] : array.slice(0, n);
};
const myLast = (array, n) => {
  return n === undefined ? array.at(-1) : array.slice(-n);
};

const mySortBy = (array, callback) => {
  const newArray = array.map((item) => {
    return { origin: item, callback: callback(item) };
  });
  if (typeof newArray[0].callback === "number")
    newArray.sort((a, b) => callback(a.callback) - callback(b.callback));
  else newArray.sort((a, b) => a.callback.localeCompare(b.callback));
  return newArray.map((element) => element.origin);
};
const myKeys = (object) => {
  return Object.keys(object);
};
const myValues = (object) => {
  return toArray.call(object);
};
