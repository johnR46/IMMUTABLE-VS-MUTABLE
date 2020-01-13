export interface TypeCustomA {
  a: number;
  b: string | number;
  x: string | number;
}
export interface TypeCustomB {
  a: number;
  b: number;
  x: number;
  s?: number;
}
const x: TypeCustomA & TypeCustomB = { a: 1, b: 2, x: 5 }; // ( Intersection  type   require  all property  it' s) //

const y: TypeCustomA | TypeCustomB = { a: 23, b: 3, x: 3 }; // UNION  type

const z: TypeCustomA | TypeCustomB = { a: 2, b: 2, x: 's', s: 5 }; // UNION  type  อย่างน้อย property ต้องครบในฝั่งใดฝั่งหนึ่ง ถ้าไม่เติม ? อะนะ (? หมายถึงไม่มีก็ด้าย)

console.log(z);
