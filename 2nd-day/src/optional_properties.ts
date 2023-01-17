interface CraftBeer {
    name: string;
    hop?: number;
}

let myBeer = {
    name: 'Saporo',
};

function brewBeer(beer: CraftBeer) {
    console.log(beer.name); // Saporo
}

brewBeer(myBeer);
