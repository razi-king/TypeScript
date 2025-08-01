// interface UserSeven{
//     name:string,
//     email:string,
//     contact:number,
//     userId:number,
//     googleId?:number,
// }
var razi = {
    name: "Razi",
    email: "r@gmail.com",
    contact: 399389393,
    firstTrial: function () {
        return "KING";
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
    coupounName: function (name, off) {
        return 40;
    }
};
console.log(razi);
