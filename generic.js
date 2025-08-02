function identityOne(val) {
    return val;
}
// We Can Do This But The Question Will Lie In How Many | We Can Use 
// Another Way IS 
function identityTwo(val) {
    return val;
}
// But As We Know Any Itself Is Not The Good Way We Mostly Try To Avoid It And Our Issue Remain The Same Like If I PUt number String Argument
// And Then I Will Return String This Any Function Will Not Give Any Error Same Is True Forr Boolean And Number Function That Is IdentityOne
// To OverCome This Issue We Use The Concept Of Generic
function identityThree(val) {
    return val;
}
identityThree("king");
identityThree(9);
identityThree(true);
// It Will Overcome The Previous Problem We Can Also Write This In This Way
function identityFour(val) {
    return val;
}
identityFour("KING");
identityFour(3949);
identityFour(true);
function identityFive(val) {
    return val;
}
function identitySix(_a) {
}
