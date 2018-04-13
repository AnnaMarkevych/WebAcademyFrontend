import './homework9-task1.scss';

function randomInteger(min, max) {
    let randomNumber = min + Math.random() * (max - min + 1);
    randomNumber = Math.floor(randomNumber);//rounding to smaller
    return randomNumber;
}

for (let i = 0; i < 20 ; i++) {
    let min = i;
    let max = i+8;
    console.log("("+min+","+max+") : " + randomInteger(min, max));
}