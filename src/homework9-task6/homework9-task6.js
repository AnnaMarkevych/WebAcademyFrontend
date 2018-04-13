let priceFruits = {
    apple: 46,
    pear: 50,
    strawberry: 106,
    grapes: "not available",
    watermelon: 69,
    banana: "not available"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        let value = obj[key];
        if (typeof value === "number") {
            obj[key] = value * 2;
        }
    }
    return obj;
}
console.log(Object.values(multiplyNumeric(priceFruits)));
