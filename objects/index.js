/*
    Investigate the following code
*/

// creates an empty object
const user = {};

user.firstName = 'Dev';
// console.log(user.firstname);
// console.log(user.firstName);
// console.log(user['firstName']);

user.lastName = 'Jetzt'

// console.log(Object.keys(user));

// console.log(typeof user.email);
// console.log(user.email);

user.email = null;

// console.log(typeof user.email);
// console.log(user.email);
// console.log(Object.keys(user));


/*
    Function? Object?
*/

// const fun = () => {
//     console.log('Am I a function?');
// }

// fun();


// fun.fun = () => {
//     console.log('This is suuuper fun');
// }
// fun.fun();

// console.log(fun.fun.toString());

const person = {
    firstname: 'John',
    lastname: 'Doe',
    pets: ['Sparkles', 'Bobz'],
    fullName: function fullName() {
        return firstname + ' ' + lastname;
    },
    showPets: function showPets() {
        this.pets.forEach(function(pet) {
            console.log(fullName() + ' owns ' + pet);
        });
    }
};

// Remove comments and fix the person code
// console.log(person.fullName());
// console.log(person.showPets());