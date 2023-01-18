function sum(a: number, b: number): number {
    return a + b;
}
sum(10, 20); // 30
//   sum(10); // error, too few parameters
//   sum2(10, 20, 30); // error, too many parameters

export { sum };
