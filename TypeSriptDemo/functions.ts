function add (a:number,b:number):number{
    return  a+b;
}

console.log(add(5,6));

// Rest parameters

function add2 ( num1:number, num2:number, ...num3:number[]):number{
    return num1+num2+num3.reduce((a,b)=> a+b, 0);
}

let numbers = [1,2,3,4,5]

console.log(add2(100,100,...numbers))

console.log(add2(100,100,100,100,100,100))

// Generic Functions
function getItems<Type>(items: Type[]): Type[]{
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);
console.log(concatResult);