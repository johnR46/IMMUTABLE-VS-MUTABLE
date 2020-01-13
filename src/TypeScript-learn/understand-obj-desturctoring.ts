// # array Destruct

let [ff, ...rest] = [1, 2, 3, 4];

// console.log(ff);
// console.log(rest);

let input = [1, 2];

let first = input[0];
let secon = input[1];
// console.log(input);

// swap
[first, secon] = [secon, first];
// console.log(first);
// console.log(secon);

// with fun รับ parm เป็น  array

// function f([firstm, last]: [number, number]) {
//   //   console.log(firstm);
//   //   console.log(last);
// }

// f([1, 2]);

// Object destructuring

let o = {
  a: undefined,
  b: null,
  c: 'bar'
};

let { a, b } = o;

// console.log(a, b);

// example real world

let formValue = {
  criteria: {
    nameSearch: 'John'
  }
};
let formValue2 = {
  criteria: undefined
};

// let { criteria = { nameSearch: 'no val' } } = formValue2;  // way 1

let { criteria } = formValue2;                               // way 2
let { nameSearch } = criteria || { nameSearch: '2' };         // way 2

// const { nameSearch } = pmMUnit || { nameSearch: '' };

// let { name:sdad } = criteria;

console.log(nameSearch);
