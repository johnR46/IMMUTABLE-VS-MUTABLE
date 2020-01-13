const x = { a: 1, b: 2, x: 5 }; // ( Intersection  type   require  all property  it' s) //
const y = { a: 23, b: 3, x: 3 }; // UNION  type
const z = { a: 2, b: 2, x: 's', s: 5 }; // UNION  type  อย่างน้อย property ต้องครบในฝั่งใดฝั่งหนึ่ง ถ้าไม่เติม ? อะนะ (? หมายถึงไม่มีก็ด้าย)
console.log(z);
