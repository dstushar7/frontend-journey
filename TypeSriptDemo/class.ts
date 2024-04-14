import {Login,User} from './interface'

// import * as UserLogin from './interface'

class Employee implements Login{
    // for private attributes just add # in front of attribute

    #id: number;
    name: string;
    address: string;

    // For static members
    static getEmployeeCount() : number{
        return 50;
    }

    // for getter and setter
    get empId():number{
        return this.#id;
    }
    
    set empId(id:number){
        this.#id = id;
    }

    constructor(id: number, name: string, address:string){
        this.address  = address;
        this.#id = id;
        this.name = name;
    }

    getNameWithAdress() : string{
        return `${this.name} stays at ${this.address}`;
    }

    Login(): User {
        return {name:"Tushar", id:1, email:"tusharsarker97@gmail.com"};
    }
}

class Manager extends Employee{
    constructor(id: number, name: string, address:string){
        super(id,name,address);
    }

    getNameWithAdress() : string{
        return `${this.name} is a manager at ${this.address}`;
    }
}

let tushar = new Employee(1,"Tushar","Highway to hell");

console.log(tushar);

let address = tushar.getNameWithAdress();
console.log(address);
console.log(Employee.getEmployeeCount());