export interface User{
    name : string;
    age?: number; // This attribute of this interface is optional
    id : number;
    email: string;
}

let user : User = {name:"Tushar", id:1, email:"tusharsarker97@gmail.com"}

let {name : userName, email: UserLogin}:User = {name:"Tushar", id:1, email:"tusharsarker97@gmail.com"}; //Object Destructuring

console.log(userName+UserLogin);

interface Employees extends User {
    salary : number;
}

let employee : Employees = {name:"Tushar", id:1, email:"tusharsarker97@gmail.com", salary:50000}

export interface Login {
    Login():User;
}
