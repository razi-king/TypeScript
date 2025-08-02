interface UserEight {
    name:string
    email:string
    contact:string
}
//We Use Interface Because After Declaring ItWe Can Open It And Add Aditional Option's
// let razi:UserEight = {
//     name:"King",
//     email:"k@gmail.com",
//     contact:"93933"
// }
//so can reopen UserEight And Add Additional Properties In It


interface UserEight{
    gitHubToken:string
}
let razi:UserEight={
    name:"King",
    email:"K@gmail.com",
    contact:"9393",
    gitHubToken:"razi-king"
}
// But We Can't Do This It With Type
// In The Below Example We Can Use Extends Keyword To Perform Inheritance So That Admin can Have All Properties Of User Eight

// interface Admin extends UserEight{

// }
// let raziAdmin:Admin ={
//     name:"Razi",
//     email:"r@gmail.com",
//     contact:"ieie",
//     gitHubToken:"razi-admin"
// }

// But I Can Also Declare Additional Properties In Admin As We Can See In The Below Example

interface Admin extends UserEight{
    role:"Hr"|"Tr"|"king"
}
let raziAdmin:Admin ={
    name:"Razi",
    email:"r@gmail.com",
    contact:"388349",
    gitHubToken:"raziking",
    role:"king"
}
console.log(raziAdmin);
