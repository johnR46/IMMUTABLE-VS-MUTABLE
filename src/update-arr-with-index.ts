let y = [
  {
    code: '1',
    name: 'K'
  },
  {
    code: '2',
    name: 'J'
  }
];

let xx = {
  code: 1,
  name: 'kkkk'
};

function updateArr(
  index: number,
  parm: { code: string; name: string },
  cur: {}[]
) {
  const c = cur.map((v, i) => {
    if (i === index) {
      return {
        code: parm.code,
        name: parm.name
      };
    } else {
      return v;
    }
  });
  return c;
}

const update = updateArr(
  0,
  {
    code: '1',
    name: 'kkkk'
  },
  y
);

console.log(update);
