type crud = 'C' | 'R' | 'U' | 'D';

enum cc {
  'C' = 'C',
  'R' = 'R',
  'U' = 'U',
  'D' = 'D'
}

let mode: crud;
let mode2: cc;

mode = 'C'; // ต่างกันตรงนี้

mode2 = cc.C;

switch (mode2) {
  case cc.C: {
    console.log('delete');
    break;
  }
}
