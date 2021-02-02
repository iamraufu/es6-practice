class Chef {
    constructor() {
        this.fatherName = "Gus Fring";
    }
}
class Cook extends Chef {
    constructor(name) {
        super();
        this.name = name;
    }
}

const person1 = new Cook("Walter White");
const person2 = new Cook("Jessy Pinkman");
console.log(person1, person2);