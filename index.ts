//STEP_09a NAMED FUNCTION parameters are required
function add(num1:number,num2:number):number{
return num1+num2;
}
 //console.log(add(4,8));

 //REST PARAMETERS ... its useful for so many arguments as array,it should be the last parameter of function
 function add1(...num1 : number[]){
   return num1;
 }
 console.log(add1(23,76,45,56,12));
 

 // DEFAULT PARAMETER
 function greetUser(user:string="user"){
    return `Hello , ${user} welcome to our new class !`
 }
 
 //console.log(greetUser());
 
 //OPTIONAL PARAMETER
 function greet(user? :string){
    return `Hello , ${user} welcome to our new class !`
 }
 console.log(greet());

//ANONYMOUS FUNCTION me pehle ek variable banate hn is me func me func banate hn
let myFunc : (num1:number,num2:number)=>number = function(num1:number,num2:number):number{
   return num1+num2;
}
console.log(myFunc(2,9));
//type name does not matters in ANONYMOUS FUNCTION
let myFunc1 : (value:number,increament:number)=>number = function(num1:number,num2:number):number{
   return num1 + num2;
}