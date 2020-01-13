enum MODE {
  'CREATE' = 'CREATE',
  'UPDATE' = 'UPDATE',
  'VIEW' = 'VIEW',
  'NONE' = 'NONE'
}

export interface TypeCustom {
  [featKey: string]: {
    formValue: {} | null;
    criteria: {} | null;
    result: [];
    mode: MODE;
    activeIndex: number;
  };
}

let x: TypeCustom = {
  A: {
    formValue: 'sss',
    activeIndex: -1,
    criteria: {},
    mode: MODE.NONE,
    result: []
  }
};

// let gggg = ['A', 'B', 'C']
//   .reduce((prv, cur) => {
//     return [...prv, cur];
//   }, [])
//   .map(vv => {
//     return {
//       [vv]: {
//         formValue: {},
//         criteria: {},
//         result: [],
//         mode: MODE,
//         activeIndex: -1
//       }
//     };
//   });

// const select = gggg.filter(v => v['A']);
