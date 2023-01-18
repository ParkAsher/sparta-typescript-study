class Developer {
    readonly name: string;

    constructor(theName: string) {
        this.name = theName;
    }
}

let john = new Developer('John');
john.name = 'John'; // error! name is readonly.
