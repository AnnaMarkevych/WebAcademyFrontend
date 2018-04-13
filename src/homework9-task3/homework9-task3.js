let user = {};
user.name = "Vasyl";
user.surname = "Petrov";
user.name = "Sergio";
delete user.name;
delete user.surname;
function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return false;
    } else {
        return true;
    }
}
console.log(isEmpty(user));
