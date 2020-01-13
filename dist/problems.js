function no1() {
    let o = { a: 10, b: 20, c: 50 };
    let n = Object.assign(Object.assign({}, o), { b: 50, c: 100 });
    console.log(' no 1 : \n');
    console.log('input: ', o);
    console.log('output', n);
}
function no2() {
    let o = { a: { b: 100, c: 50 }, d: 50 };
    let { a: { b, c }, d } = o;
    let n = { a: { b: 200, c }, d: d };
    let x = Object.assign(Object.assign({}, o), { a: Object.assign(Object.assign({}, o.a), { b: 200 }) });
    console.log(' no 2 : \n');
    console.log('input: ', o);
    console.log('output:', n);
    console.log('output2:', x);
}
// no2();
function no3() {
    const o = {
        a: { b: { c: 50, d: 20 }, e: 50 },
        f: 70
    };
    const { a } = o;
    const { b } = a;
    const x = Object.assign(Object.assign({}, o), { a: Object.assign(Object.assign({}, a), { b: Object.assign(Object.assign({}, b), { c: 100 }) }) }); // no 1
    console.log(' no 3 : \n');
    console.log('input: ', o);
    console.log('output:2', x);
}
no1();
no2();
no3();
