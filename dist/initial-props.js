let xx = {
    age: 0,
    height: 0,
    address: { city: '', street: '' }
};
let pauPaul = [0]
    .map(v => {
    return {
        age: v,
        height: v,
        address: {} = ['']
            .map(v => {
            return {
                city: v,
                street: v
            };
        })
            .reduce((k, v) => {
            const { city, street } = v;
            return { city, street };
        }, {})
    };
})
    .reduce((k, v) => {
    const { address, age, height } = v;
    return { age, height, address };
}, {});
console.log(xx);
console.log(pauPaul);
