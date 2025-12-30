var score = 33;
score = 44;
score = "55";
var hitesh = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 434 };
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
        console.log(id);
    }
    else {
        id = id + 2;
        console.log(id);
    }
}
getDbId(5);
getDbId("Heloo");
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3"]; //either string or number
var data4 = ["1", "2", 3, true]; //different types of values
//only specific value
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "window"
