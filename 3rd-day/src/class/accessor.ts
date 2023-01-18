class Human {
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

const asher = new Human();
asher.name = 'asher';
console.log(asher.name); // asher

export { Human };
