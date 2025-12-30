interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId? : string
    // startTrial : () => string
    startTrial() : string
    getCoupon(couponname: string , value: number) : number
}

const hitesh: User = {dbId: 22 , email: "h@h.com" , userId: 2211 , 
    startTrial() {
    return "trial started"
},
    getCoupon: (coupon: "hitesh0", off: 10) => {
        return 10;
    }
}
hitesh.email = "h@hc.com"