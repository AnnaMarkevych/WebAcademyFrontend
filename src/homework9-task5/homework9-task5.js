let salaries = {
    John: 400,
    Jack: 600,
    Jim: 500,
    Alex: 50000000,
    Anna: 700000
};
function richEmploy(obj) {
    let max = 0;
    let richName = "Нет сотрудников";
    for (let key in obj){
        let salary = obj[key];
        if (max < salary) {
            max = salary;
            richName = key;
        }

    }
    return richName;
}
console.log(richEmploy(salaries));
console.log(richEmploy({}));
