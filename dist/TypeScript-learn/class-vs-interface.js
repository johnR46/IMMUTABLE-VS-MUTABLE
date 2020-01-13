class PizzaMaker {
    constructor(event) {
        this.event = event;
        this.event = event;
    }
    static create(event) {
        return { name: event.name, toppings: event.toppings };
    }
}
const pizza = PizzaMaker.create({
    name: 'x',
    toppings: ['a', 'b']
});
const xad = new PizzaMaker({
    name: 'x',
    toppings: ['a', 'b']
});
console.log(xad);
