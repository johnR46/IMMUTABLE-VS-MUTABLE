// let num: number;

// num = 0.1;

// console.log('hello world type', num);

// function warnUser() {
//   alert('xxx');
// }

// let t: Array<number> = [1, 2, 3, 4];

// console.log(t);

// let touple = ['222', 2, 3, '3'];
// console.log(touple);

interface Icalc {
  add(first: number, secon: number): any;
  s: number;
}

let x: Icalc = {
  add(first: number, secon: number) {
    return first + secon;
  },
  s: 3
};

// console.log(x.add(1, 2));

// console.log(x.s);

// class Person {
//   field: string;
//   constructor(field: string) {
//     this.field = field;
//   }

//   setField(field: string) {
//     return (this.field = field);
//   }
//   getField(): string {
//     return this.field;
//   }
// }

// let cc = new Person('rfew');

// console.log(cc.getField());

// enum di {
//   'Up',
//   'Down',
//   'Left',
//   'Right'
// }

// console.log();

// let fun = r => console.log('xxx' + r);

// fun('s');
// optinal 



