function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
console.log(addTwo(7));
console.log("---------------------------------------------------");
// function getUpper(val){
//     return val.toUpperCase();
// }
// console.log(getUpper("3"));
// console.log(getUpper("king"));
// console.log(getUpper(45));
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("3"));
console.log(getUpper("king"));
// console.log("---------------------------------------------");
// function signUpUser(name:string,email:string,isPaid:boolean){
// }
// let loginUser = (name:string,email:string,isPaid:boolean)=>{
//     console.log("Name:",name);
//     console.log("Email:",email);
//     console.log("IsPaid:",isPaid);
// }
// loginUser("Razi","R@gmail.com");
console.log("---------------------------------------------");
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("IsPaid:", isPaid);
};
loginUser("Razi", "R@gmail.com");
//Now We Get The Problem Of Return type We Have To Solve That Issue
function addSeven(num) {
    return "Hello";
}
//This Function Returning String But I May Want It To Be A Number 
var myNum = addSeven(5);
console.log("This Should Be A Number:", myNum); //As We Can See It Is Returning The String 
//So To Counter This Step We Use 
function addSevenTwo(num) {
    return num + 7;
}
var myNumTwo = addSevenTwo(4);
console.log(myNumTwo);
//I Can Do The Same With Arrow function
var nameVal = function (name) {
    return name;
};
nameVal("Razi");
console.log("The Value Of The Name Is : ", nameVal);
