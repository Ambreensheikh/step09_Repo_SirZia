//STEP_09a NAMED FUNCTION parameters are required
function add(num1, num2) {
    return num1 + num2;
}
//console.log(add(4,8));
// DEFAULT PARAMETER
function greetUser(user = "user") {
    return `Hello , ${user} welcome to our new class !`;
}
//console.log(greetUser());
//OPTIONAL PARAMETER
function greet(user) {
    return `Hello , ${user} welcome to our new class !`;
}
console.log(greet());
//ANONYMOUS FUNCTION me pehle ek variable banate hn is me func me func banate hn
let myFunc = function (num1, num2) {
    return num1 + num2;
};
export {};
//console.log(myFunc(2,9));
