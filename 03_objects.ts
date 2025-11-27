// // const User = {
// //     name: "hitesh",
// //     email: "hitesh@lco.dev",
// //     isActive: true
// // }

// // function createUser({name: string, isPaid: boolean}){}

// // createUser({name: "hitesh", isPaid: false})

// // // to return object
// // function createCourse():{name: string, price: number}{
// //     return {name: "reactjs", price:399}
// // }

// // let newUser = {name:"hitesh", isPaid: false, email: "h@h.com"}
// // //not good way
// // createUser(newUser)

// // type aliasis
// type ID = number | string;
// type User ={
//     readonly _id:string,
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return ({_id:"01",name: "", email:"" , isActive: true})
// }

// createUser({_id:"01",name: "", email: "", isActive: true})

// type MyString = string

type User = {
    readonly _id : string
    name : string
    email : string
    isActive : boolean
    credCardDetails? : number
}

let myUser : User = {_id:"1" , name : "Shakal", email: "proxima@gmail.com" , isActive: true}

myUser.name = "Mogambo"
// myUser._id = 2

type cardNumber = {cardnumber : string}
type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {cvv: number}


export {}