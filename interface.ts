// interface UserSeven{
//     name:string,
//     email:string,
//     contact:number,
//     userId:number,
//     googleId?:number,
// }

// let razi :UserSeven ={
//     name:"razi",
//     email:"r@gmail.com",
//     contact:93939,
//     userId:838383,
// }
// console.log(razi);

// razi.name="King"
// console.log(razi);

// interface UserSeven{
//     readonly id:number,
//     name:string,
//     email:string,
//     contact:number,
//     userId:number,
//     googleId?:number
// }
// let razi :UserSeven = {
//     id:404,
//     name:"Mehtod Not Found",
//     email:"userError@gmail.com",
//     contact:3333,
//     userId:83838,
//     googleId:38388383883
// }
// console.log(razi);
// razi.contact=9999999999999
// console.log(razi);
// razi.id= 939 // We Can't Change It Value Because We Assign It With read Only

// interface UserSeven {
//     name:string,
//     email:string,
//     firstTrial:() => string,
// }
// let razi : UserSeven ={
//     name:"razi",
//     email:"Kingk#gmai",
//     firstTrial:() =>{
//         return "string"
//     }
// }
// console.log(razi);

// interface UserSeven{
//     name:string,
//     email:string,
//     firstTrial():string
// }
// let razi:UserSeven ={
//     name:"King",
//     email:"K@gmail.com",
//     firstTrial:() =>{
//         return "I Am The Devil Of My World"
//     }
// }
// console.log(razi);
interface UserSeven {
    name:string,
    email:string,
    contact:number,
    firstTrial():string,
    coupounName(coupounName:string,off:number):number
}
let razi:UserSeven = {
    name:"Razi",
    email:"r@gmail.com",
    contact:399389393,
    firstTrial:()=>{
        return "KING"
    },
    // coupounName:()=>{
    //     return 20
    // }// It Do Not Give Error Even I Don't Pass Method Argument But IF We Pass Wrong Argument Type It Will Give Error
    // coupounName:(true)=>{ // It Will Return Error As It Will Does Not Have Any Type Of boolean Variable
    //     return 20
    // }
    // but if i pass a single value which is matching one of the method argument type then it will not give any error
    // coupounName:(name:"KingCoupoun")=>{
    //     return 20
    // }
    // It Will Also Give Us Error
    // coupounName:(name:"KingCoupoun",off:true)=>{
    //     return 20
    // }
    coupounName:(name:"KingCoupoun",off:20)=>{
        return 40
    }
}
console.log(razi);



