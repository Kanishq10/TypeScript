function addTwo(num: number) : number{
    return num+2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string , email:string , isPaid: boolean){}

let loginUser = (name:string, email:string, isPaid:boolean=false)=>{}
addTwo(5)
getUpper("gh")
signUpUser("hitesh","hiea@gmail.com", false)
loginUser("h","h@h.com")

function getValue(myVal: number): boolean{
    if(myVal > 5){
        return true
    }
    return false;
}

//better way to write
const getHello = (s:string) : string => {
    return ""
}

const heroes = ['thor', "spiderman", "ironman"]

// heroes.map((hero:string) =>{
//     return  `hero is ${hero}`
// })
heroes.map((hero:string) =>{
    return  `hero is ${hero}`
})

//printing error to console
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

//preferred over void for not returning nothing

function handleError(errmsg : string): never{
    throw new Error(errmsg);
}

export {}