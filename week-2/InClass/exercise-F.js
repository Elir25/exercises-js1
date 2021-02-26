function startsWithCapital(userName, userType) {
    if (userName === "admin" || userType === "manager") {
        return `username valid(1)`
    }
    if (userName.length > 5 && userName.length < 10) {
     return `username valid(2)`;
    } else {
     return `username invalid`;
    }
}
console.log(startsWithCapital("marin", "admin"))