// We Can Declare A Abstract class by using abstract keyword
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var KingKong = /** @class */ (function () {
    function KingKong(name, email) {
        this.name = name;
        this.email = email;
    }
    KingKong.prototype.getApple = function () {
        console.log("An Apple A Day Keeps Doctor Away");
        return "IOS";
    };
    return KingKong;
}());
// We Can't Create The Object Of The Abstract Class
// let v = new KingKong("King","K@gmail.com") // It Will Throw An Error
// There Are Some Ways To Create The Object First ONe Is Directly Using It
// First Way
//  class KingKhan extends KingKong{
//  }
//  let v = new KingKhan("King","K@gmail.com")
// Second Way 
var KingKhan = /** @class */ (function (_super) {
    __extends(KingKhan, _super);
    function KingKhan(name, email, contact) {
        var _this = _super.call(this, name, email) || this;
        _this.name = name;
        _this.email = email;
        _this.contact = contact;
        return _this;
    }
    KingKhan.prototype.getSaple = function () {
    };
    return KingKhan;
}(KingKong));
var v = new KingKhan("King", "K@gmail.com", 9393);
v.getApple();
// You Have A Notice that interface And abstract class Are Basically Doing The Same Thing So What IS Difference Between Them
// So The Difference Is In Abstract Class We Also Able To Define The Some Features We Want To Pass On It's Child Class
// But We Can't Do This It Is On Interface
