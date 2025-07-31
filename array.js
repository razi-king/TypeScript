// There Are Two Ways To Define The Array
// First One Is The type [] =[]
// Example
// const allHeros = []
// allHeros.push("kdkd")
// The Above Code Fall Under The Category Of Never
// const allHeros: string[] = [];
// allHeros.push("SuperMan")
// const heroPower: number[] =[];
// heroPower.push(34)
// console.log(allHeros,heroPower);
// Second Way To Write This Or Create An Array
var allHeros = [];
var heroPower = [];
allHeros.push("KingRazi");
heroPower.push(10000000000000000000000000000000000000000000);
console.log(allHeros, heroPower);
var allUsers = [];
allUsers.push({ name: "razi", email: "r@gmail.com", isBillioniare: true });
allUsers.push({ name: "King", email: "k@gmail.com", isBillioniare: true });
console.log(allUsers);
