let asd = {
    formVal: { criteria: { xxxx: '2' } }
};
let tt = {
    formVal: undefined
};
let { formVal = {
    criteria: {
        name: 's'
    }
} } = tt;
/*
//way 1
let {
  formVal = {
    criteria: {
      xxxx: 'no value'
    }
  }
} = tt;

let {
    criteria: { xxxx }
  } = formVal;
*/
// console.log(xxxx);
