var score = "Razi";
// It will give error Here score = 69 because score has the data type of string so it can only store string data
// Similarly
var scoreTwo = 69;
// It Will Give Error Here --> scoreTwo = "King" Because scoreTwo Has The Data Type Of number And We Are Trying To Store String So IF We Can't Do This
// But If We Need A Variable That Can Store Two More Different Type Of Data Then In That Case We USe Union Concept
var scoreThree = 22;
scoreThree = "KingRazi"; // Here We Don't Get Any Error Same Is True For Function If We Want A Function To Return Two Different Values Then We Can Also Achieve This Using Union concept
function generateScore(scoreForth) {
    //return "2"+2;
    return 3 + 3;
}
// function getDBID(id:number|string){
//     id.toLowerCase();// We Cannot Do This Directly As It Is Not Clear It Is Whether Number Or String
// }
function getId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
        console.log(id.toLowerCase());
    }
    else {
        id++;
        console.log(id);
    }
}
getId("KING");
getId(16);
// We Can Also Do These Thing With Arrays
// For Example If I Want An Array Which Contain Both Number And String So What I Can Do
// First Way
// let arrayOne:number[] = [1,3,"razi"] // I Cannot Pass The String Because It Is No Array
// Similarly 
// let arrayTwo:string [] = ["King","Razi",17] // I Cannot Pass The Number Because It Is String Array
// Second Way 
// We Can Use Union And Declared It Like This
// let arrayThree: stirng | number [] = [] // Wel This One Also Give Us Error So We Can Try To Modify 
// let arrayFour: string[] | number[] = [1,3,4,5,"King"] //But Here We Can Also Getting Error We Can Write Both Number And String In Same Array In This Case We Can Save Array Of Number Or Array Of String In Same  Variable Named arrayFour But Not Simultaneously In The Same Error
// So Achieve Our Goal We Use Next Way 
// Fourth Way
var arrayFive = [18, "Virat", 17, "ABD"]; // Here We Can Achieve Our Goal Of Writing Two Diffrent  Data In The Same Array
console.log(arrayFive);
// We Can Also Declare No Of Different Type Of Array In Our Data
var arraySix = [18, "Virat", 17, "ABD", true, false]; // Here We Can Achieve Our Goal Of Writing Two Diffrent  Data In The Same Array
console.log(arraySix);
// We Can also Perform Literal Type Of Asigining 
var pi = 3.14; // We Can Only Assign 3.14 in this pi Variable If i try to declare other value in pi variable then i Will get error here
// pi = 3.153;
// Use Case For Literal Be Like Suppose You Going on plane you can get seat only in economy class or business class 
var seatClass;
seatClass = "Business";
// Similarly IF We Want Seat In Business Class It Can Either Be Window Seat Or Aisle Seat 
// So In That Scenario We Can Use 
function getSeatAllot(seatClass) {
    if (seatClass == "Business") {
        var seatAllot = void 0;
        seatAllot = "Window";
        console.log(seatAllot);
    }
    else {
        var seatAllot = void 0;
        seatAllot = "Middle";
        console.log(seatAllot);
    }
}
getSeatAllot(seatClass);
getSeatAllot("Economy");
