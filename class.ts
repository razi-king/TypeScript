// class UserNine{
//     constructor(name:string,email:string){
//         this.name = name;
//         this.email = email
//     }
// }

// class UserNine{
//     name:string;
//     email:string;
//     constructor(name:string,email:string){
//         this.name=name;
//         this.email=email;
//     }
// }
// const ri = new UserNine("razi","r@r.com");
// console.log(ri.email,ri.name);

// class UserNine{
//     name:string;
//     email:string;
//     readonly userId:string;
//     constructor(name:string,email:string,userId:string){
//         this.email=email;
//         this.name=name;
//         this.userId=userId;
//     }
// }
// let ri = new UserNine("Razi","r@gmail.com","9393");
// console.log(ri.name,ri.email,ri.userId);
// ri.name="King"
// console.log(ri.name,ri.email,ri.userId);
// // We Can Change The value Of Name And Email But We Can't Change The Value OF UserId Because It IS Preffexed With readonly Keyword

// There Are Also Way For Us To Limit The Visibility OF Variable i.e. Achieve Using private public or protected keyword and if no accesmodifier is preffexed with variable then the by default value will be or by default scope will be public
// class UserNine{
//     private name:string;
//     public email:string;
//     constructor(name:string,email:string){
//         this.name = name;
//         this.email = email;
//     }
// } 
// let ri = new UserNine("razi","r@gmail.com")
// ri.email
// // but if i call ri.name it will return error as it is preffixed with private keyword
// // ri.name
// class UserNine{
//     constructor(public name:string,public email:string){
        
//     }
// }
// let ri = new UserNine("razi",'r@gmail.com');
// console.log(ri.name,ri.email);
// We Can Also Perform Getter Setter In This Also
class UserNine{
    num:number
    name:string // It Is By Default Public 
    private email:string // It Is private
    constructor(name:string,email:string){
        this.name = name;
        this.email = email;
    }
    get getEmail():string{
        return this.email;
    }
    set setNum(num:number){ // Set Method Do Not Return Any Type Of Data
        this.num = num
    }
}
let ri = new UserNine("razi","r@gmail.com");
let em = ri.getEmail; // Using Getter Mehtod I Can Access Private Variable Outside The Class
console.log(ri.name,em,ri.num);
ri.setNum=9;
ri.setNum = 45;

console.log(ri.name,em,ri.num);
