function pow(x, n) {
    let result = x;
    for (let i=0; i<n-1; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(10,4));