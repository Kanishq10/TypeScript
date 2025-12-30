let score: number | string = 33

score = 44
score = "55"

type User ={
    username : string,
    id : number
}

type Admin = {
    name: string,
    id: number
}

let hitesh : User | Admin = {name: "hitesh" , id: 334}
hitesh = {username : "hc" , id:434}

function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase()
        console.log(id)
    }
    else{
        id = id+2
        console.log(id)
    }
}

getDbId(5)
getDbId("Heloo")

//array
const data : number[] = [1,2,3]
const data2: string[] = ["1", "2" ,"3"]
const data3: string[] | number[] = ["1","2","3"]    //either string or number
const data4: (string | number | boolean) [] = ["1" ,"2" , 3 , true] //different types of values

//only specific value
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "window"

export {}