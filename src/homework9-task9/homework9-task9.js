let array = [5,6,45,780,4,2,13,17];
function find(arr,value) {
    let a = prompt("Ведите значение","");
    for (let i=0; i < arr.length; i++) {
        if (a == arr[i]) {
            return i;
        }
    }
    return -1;
}

console.log(find(array));