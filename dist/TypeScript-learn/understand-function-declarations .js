{
    // function p<T extends Object>() {
    //   return p;
    // }
    // p<{ p: string; q: number }>();
    function f({ a = '', b = 0 }) {
        // reqire a  ตาม interface
        console.log(a, b);
    }
    // f({ a: '2', b: 23 });
}
{
    let x = (a) => a;
    let y = (b, s) => b;
    // y = x; // ok เพราะ  y  โยน b ไปให้  a ได้
    // x = y; // fail  เพราะ  เอาอะไรไปให้  s ?
    // console.log(x(5));
    let items = [1, 2, 3, 4];
    items.forEach((item) => console.log(item));
}
