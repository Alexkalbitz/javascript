class Animal {

    constructor() {
        this.type = 'Animal';
    }

    sound() {
        console.log('Unspecified animal sound');
    }

    sayType() {
        console.log(this.type);
    }
}

class Dog extends Animal {

    constructor() {
        super();
        this.type = 'Dog';
    }

    sound() {
        console.log('Woof');
    }
}

class Cat extends Animal {

    sound() {
        console.log('Meow');
    }
}


// console.log('\n###> Animal:');
// let animal = new Animal();
// animal.sound();
// animal.sayType();

// console.log('\n###> Dog');
// let dog = new Dog();
// dog.sound();
// dog.sayType();

// console.log('\n###> Cat');
// let cat = new Cat();
// cat.sound();
// cat.sayType();


// console.log();

// cat = dog instanceof Animal ? dog : animal;
// cat.sound();
