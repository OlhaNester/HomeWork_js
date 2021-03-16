const test = function (b) {
  console.log(b);
  b = 10;
  console.log(b);
};

let a = 5;
console.log(a);

test(a);
console.log(a);
