// function createUser({"name":string,"isPaid":boolean}){

// }
// let razi = "Razi"
// createUser({"name":razi,"isPaid":true})

// function createCourse():{courseName:string,coursePrice:number}{
//     let newUser = {courseName:"TypeScript",coursePrice:100*0};
//     return newUser;
// }


// type User ={
//     name:string;
//     email:string;
//     isBillioniare:boolean;
// };
// function mobileUser(user:User):User{
//    // return {name:"Guest",email:"guest@gmail.com",isBillioniare:true}
//     return user
// };

// mobileUser({name:"Razi",email:"r@gmail.com",isBillioniare:true})


type User = {
    _id:string;
    name:string;
    email:string;
    isBillioniare:boolean;
}
const userOne:User = {
    _id:"4343",
    name:"Razi",
    email:"R@gmail.com",
    isBillioniare:true
}
console.log("Value Before Change --> ",userOne);

userOne._id="3333"
userOne.email="r@gmail.com"
console.log("Value After Change --> ",userOne)

type UserTwo = {
    readonly _id:string;
    name:string;
    email:string;
    isBillioniare:boolean;
}
const userTwo:UserTwo = {
    _id:"4343",
    name:"Razi",
    email:"r@gmail.com",
    isBillioniare:true
}

console.log("Value Before Change --> ",userTwo);

userTwo.email="R@gmail.com"
// userTwo._id="33333" // This Will Return An Error Because _id Is Defined With 'readonly' Keyword that Is Means Once The Value Is Designed You Can't Chage It's Value

console.log("Value After Change --> ",userTwo);


//? We Aso Use '?' This Keyword For The Thing We Want If User Provided Then It Will Okay If Not Provided Then It Will Does Not Return any Value


console.log("------------------? keyword------------------------");
type UserThree ={
    readonly _id:string;
    name:string;
    email:string;
    isBillioniare:boolean;
    bankBalance?:number;
}

const userThree : UserThree ={
    _id:"438483",
    name:"Razi",
    email:"r@gmail.com",
    isBillioniare:true
} 
console.log("There Is NO Error In The Value Of User Three As I Am Not Getting Any Error Even I Don't Povide The Value For bankBalance",userThree)

const userFour :UserThree = {
    _id:"88383",
    name:"King",
    email:"k@gmail.com",
    isBillioniare:true,
    bankBalance:883838383883
}
console.log("And Here I Also Provide The Value Of The Fourth User",userFour);






export {}