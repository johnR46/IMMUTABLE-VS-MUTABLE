var MODE;
(function (MODE) {
    MODE["CREATE"] = "CREATE";
    MODE["UPDATE"] = "UPDATE";
    MODE["VIEW"] = "VIEW";
    MODE["NONE"] = "NONE";
})(MODE || (MODE = {}));
let x = {
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
