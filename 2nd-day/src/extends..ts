interface Person {
    name: string;
}

interface Developer extends Person {
    skill: string;
}

let fe = {} as Developer;

fe.name = 'josh';
fe.skill = 'TypeScript';
