let arr = [1, 2, 3, 4];
Array.prototype.Mymap = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i], i, this));
  }
  return newArray;
};
const arr2 = arr.Mymap((val) => {
  return val * 3;
});
console.log(arr2);

Array.prototype.myReduce = function (cb, intit) {
  let acc = inval;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};
const reduced = arr.myReduce((acc, curr) => {
  return acc + curr;
});
console.log(reduced);
Array.prototype.myFilter = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) newArray.push(this[i]);
  }
  return newArray;
};
const filtered = arr.myFilter((num) => {
  return num > 2;
});
console.log(filtered);
