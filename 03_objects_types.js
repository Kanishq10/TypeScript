"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// object literal example
var baseUser = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
};
function createBasicUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
createBasicUser({ name: "hitesh", isPaid: false });
// to return object
function createCourse() {
    return { name: "reactjs", price: 399 };
}
var candidateUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
// not a good way (excess property isn't checked when passing a variable)
createBasicUser(candidateUser);
// type safety for objects
function createFullUser(user) {
    return { _id: "01", name: "", email: "", isActive: true };
}
createFullUser({ _id: "01", name: "", email: "", isActive: true });
//Making User
var appUser = { _id: "1", name: "Shakal", email: "proxima@gmail.com", isActive: true };
appUser.name = "Mogambo";
var CardDetails = { cardnumber: "67654445998", cardDate: "2025-08-08", cvv: 878 };
console.log(CardDetails);
