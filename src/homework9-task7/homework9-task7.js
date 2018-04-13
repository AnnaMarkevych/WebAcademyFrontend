function randomInteger(min, max) {
    let randomNumber = min + Math.random() * (max - min + 1);
    randomNumber = Math.floor(randomNumber);//rounding to smaller
    return randomNumber;
}

function randomItem(arr) {
    let randomIndex = randomInteger(0, arr.length-1);
    return arr[randomIndex];
}

let a = [6,8,3,9,23,"Anna", "Alex", 678,343454, "Emily"];
alert(randomItem(a));
