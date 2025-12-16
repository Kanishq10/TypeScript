// object literal example
const baseUser = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
}

function createBasicUser({name, isPaid}: {name: string; isPaid: boolean}) {}

createBasicUser({name: "hitesh", isPaid: false})

// to return object
function createCourse(): { name: string; price: number } {
    return { name: "reactjs", price: 399 }
}

let candidateUser = { name: "hitesh", isPaid: false, email: "h@h.com" }
// not a good way (excess property isn't checked when passing a variable)
createBasicUser(candidateUser)

// type aliases
type ID = number | string;

// Primary user type (keep a single 'User' for the file)
type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
}

// type safety for objects
function createFullUser(user: User): User {
    return { _id: "01", name: "", email: "", isActive: true }
}

createFullUser({ _id: "01", name: "", email: "", isActive: true })

// If you want a separate alias for string:
type MyString = string

// Defining User
type DetailedUser = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credCardDetails?: number
}

//Making User
let appUser: DetailedUser = { _id: "1", name: "Shakal", email: "proxima@gmail.com", isActive: true }

appUser.name = "Mogambo"
// appUser._id = "2" // ❌ cannot assign to a readonly property

// Intersection type
type CardNumber = { cardnumber: string }
type CardDate = { cardDate: string }

type CardDetails = CardNumber & CardDate & { cvv: number }

let CardDetails = {cardnumber: "67654445998" , cardDate: "2025-08-08" , cvv: 878}

console.log(CardDetails);


// keep module boundary to avoid global collisions when bundling
export {}