let val = {
  age: 30,
  height: 180,
  address: {
    city: 'Toronto',
    street: 'Markham'
  }
};

// problem effect old val
// let xf = val;
// xf.age = 50;
// console.log(val); // old
// console.log(xf); // old

// 2  way usign object.assign();  too usign by ref

let xxx = Object.assign({}, val, {
  address: { city: val.address.city, street: val.address.street }
});
xxx.address.street = 'xxx';
xxx.age = 0;

let john = Object.assign({}, val, {
  height: 10,
  address: { ...val.address, street: 'sado;sad' }
});

// console.log(val); // old
// console.log(xxx); // way 1 assgin mutable
// console.log(john); // way 2 inmutable
