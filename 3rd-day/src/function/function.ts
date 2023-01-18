/*
    any 타입,
    tsconfig.json에서 "noImplicitAny": true 를 하면 암시적으로 any타입을 허용하지 않게된다. (오류발생)
*/
// function sum(a,b) {
//     return a+b;
// }

function sum(a: number, b: number): number {
    return a + b;
}
