interface Node {
    count: number;
    init(this: Node): () => {};
}

let nd: Node = {
    count: 10,
    init: function (this: Node) {
        return () => {
            return this.count;
        };
    },
};

let getCount = nd.init();
let count = getCount();

console.log(count); // 10
