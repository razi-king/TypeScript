// enum seatChoice {
//     Aisle,
//     Middle,
//     Window,
//     Forth
// }
// console.log(seatChoice.Aisle);
// If We Do Not Provide enum Data With anything It Will Directly Assign First Value 0 and increase it for other value so on
// enum seatChoice {
//     Aisle="aisle",
//     Middle=0,
//     Window,
//     Forth
// }// but it we declare first value or any value something else except number then for after that value we have to define it properly


// console.log(seatChoice.Aisle,seatChoice.Middle,seatChoice.Window,seatChoice.Forth);

const enum seatChoice {
    Aisle,
    Middle="king",
    Window=5,
    Forth
}
// If We Provide Any Value In Enum With Some number Then After That Value The Next Value Of Other Thing Appear In Increasing Order From That Number
console.log(seatChoice.Aisle,seatChoice.Middle,seatChoice.Window,seatChoice.Forth);



