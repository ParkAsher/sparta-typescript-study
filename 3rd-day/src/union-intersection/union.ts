function printId(id: number | string) {
    // console.log(id.toUpperCase());
    // string | number' 형식에 'toUpperCase' 속성이 없습니다.
    // 'number' 형식에 'toUpperCase' 속성이 없습니다.

    // type narrowing
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}
