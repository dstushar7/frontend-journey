let lname:string;
lname = 'John';
let newName = lname.toUpperCase();
console.log(newName);
let age:number;
age = 25;
let dob = "25"
let result = parseInt(dob)
console.log(result)

let empList : string[];
empList = ["Hello","World"]
let numList : Array<number>;
numList = [1,2,3,4];
let results = numList.filter((num)=>num>2);
let sum = numList.reduce((acc, num)=> acc+num);
let num = numList.find((num)=>num>2);
console.log(results);
console.log(num);
console.log(sum);

const enum Color{
    Red,
    Green,
    Blue
}

let c:Color = Color.Blue;
let swapNumbs: [number,number]; // Tuples
// UDF
function swapNumbers(num1: number,num2: number):[number,number]{
    return [num2,num1]
}
swapNumbs = swapNumbers(10,20)
console.log(swapNumbs[1])