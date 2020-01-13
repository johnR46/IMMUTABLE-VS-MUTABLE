{
    {
        class Pizza {
            constructor(name, toppings) {
                this.name = name;
                this.toppings = toppings;
            }
        }
        // new obj  แบบนี้ เป็นการ new ของพร้อมทั้งได้  Type มาด้วย
        class PizzaMaker {
            static create(event) {
                // bad way  แถวๆ นี่แหละ
                return { name: event.name, toppings: event.toppings };
            }
        }
        const pizza = PizzaMaker.create({
            name: 'x',
            toppings: ['a', 'b']
        });
        console.log(pizza);
    }
    // ดูโค้ดข้างบนแล้วเหนื่อยเนอะ เขียนเยอะซิหัย
    // งั้น ดูนี่
    {
        class PizzaMaker {
            static create(event) {
                // bad way แถวๆนี้
                return { name: event.name, toppings: event.toppings };
            }
        }
        const pizza = PizzaMaker.create({ name: 'x', toppings: ['sss'] });
        console.log(pizza);
        // แล้วแบบนี้คิดว่าไง ?
    }
    {
        class Pizza {
            constructor(name, toppings) {
                this.name = name;
                this.toppings = toppings;
            }
        }
        class PizzaMaker {
            static create(event) {
                // good way  แต่เหนื่อย ? แต่รับประกันว่า ได้  pizza  ใหม่ แน่นอน
                return new Pizza(event.name, event.toppings);
            }
        }
        const pizza = PizzaMaker.create({ name: 'x', toppings: ['xxx'] });
        console.log(pizza);
    }
}
