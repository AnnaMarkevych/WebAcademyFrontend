function filterRange(arr, a, b) {
    let result = [];
    arr.forEach((item) => {
        if (a <= item && item <= b) {
            result.push(item);
        }
    });
    return result;
}

function filterRange2(arr, a, b) {
    let result = arr.filter((item) => {
        if (a <= item && item <= b) {
            return true;
        }
    });
    return result;
}

console.log(filterRange([10,20,30,40], 15, 35));
console.log(filterRange2([10,20,30,40], 15, 35));
