// We Can Declare A Abstract class by using abstract keyword

abstract class KingKong{
    constructor(
        public name:string,
        public email:string
    ){

    }
    abstract getSaple():void;
    getApple():string{
        console.log("An Apple A Day Keeps Doctor Away");
        
        return "IOS"
    }
}
// We Can't Create The Object Of The Abstract Class

// let v = new KingKong("King","K@gmail.com") // It Will Throw An Error
// There Are Some Ways To Create The Object First ONe Is Directly Using It
// First Way
//  class KingKhan extends KingKong{
    
//  }
//  let v = new KingKhan("King","K@gmail.com")
// Second Way 
class KingKhan extends KingKong{
    constructor(
        public name:string,
        public email:string,
        public contact:number
    ){
        super(name,email)
    }
    getSaple(){

    }
}
let v = new KingKhan("King","K@gmail.com",9393)

v.getApple()
// You Have A Notice that interface And abstract class Are Basically Doing The Same Thing So What IS Difference Between Them
// So The Difference Is In Abstract Class We Also Able To Define The Some Features We Want To Pass On It's Child Class
// But We Can't Do This It Is On Interface
