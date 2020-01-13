// // MUTABLE  CODE

// data => {
//   for (let i = 0; i < data.length; i++) {
//     data[i]['snippet'] = data[i]['targetName'];
//     delete data[i]['targetName'];
//     for (let j = 0; j < data[i].failingTapNeighbours.length; j++) {
//       data[i].failingTapNeighbours[j]['snippet'] =
//         data[i].failingTapNeighbours[j]['targetName'];
//       delete data[i].failingTapNeighbours[j]['targetName'];
//     }
//   }
//   return data;
// };

// formData => {
//   return formData.map(tapTarget => {
//     const { tagname, failingTapNeighbours, ...rest } = tapTarget;
//     return {
//       snippet: tagname,
//       ...rest,
//       failingTapNeighbours: failingTapNeighbours.map(neighbor => {
//         const { tagname, ...rest } = neighbor;
//         return {
//           snippet: tagname,
//           ...rest
//         };
//       })
//     };
//   });
// };
