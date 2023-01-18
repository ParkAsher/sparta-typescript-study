function sum(a: number, b = 100): number {
    return a + b;
}
const result1 = sum(10, undefined); // 110
// const result2 = sum(10, 20, 30); // error, too many parameters
const result3 = sum(10); // 110

console.log({ result1, result3 });

export { sum };
