function result() {
    let summ = 0;
    let arr = [];
    while (true) {
        let value = prompt("Введите число", "");
        let num = +value;
        console.log(value);
        if (value === "" || value === null || isNaN(num)) break;
        arr.push(num);
        summ += num;
    }

    console.log(arr);
    return summ;
}
console.log("Сумма элементов массива равна " + result());
