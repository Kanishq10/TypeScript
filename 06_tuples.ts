// const user: (string | number)[] = [1 , "hc"]

let tUser: [string, number, boolean]

tUser = ["hc" , 131 ,true]    //only above order and types should be there.

let rgb: [number , number , number]  = [255, 123, 112]

type User = [number , string]
const newUser: User = [112, "example@google.com" ]

newUser[1] = "hello"  //value is changing , make it restrict
newUser.push(343)

export {}