interface CraftBeer1 {
    beerName: string;
    nameBeer(beer: string): void;
    // test: string;
}

class myBeer1 implements CraftBeer1 {
    beerName: string = 'Baby Guinness';
    nameBeer(b: string) {
        this.beerName = b;
    }
    constructor() {}
}
