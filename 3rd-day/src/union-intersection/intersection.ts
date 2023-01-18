type Common = {
    name: string;
    age: number;
    gender: string;
};

type Animal = {
    howl: string;
};

type Cat = Common & Animal;
type Dog = Common | Animal;

let dog: Dog = {
    howl: 'dogggg',
};
let cat: Cat = {
    age: 3,
    gender: 'C',
    name: 'CC',
    howl: 'cattttt',
};
