let fname='myName';
 let age:number;

let dob = "25";
age = parseInt(dob)

let isValid : boolean;
 console.log(age)

 let empList : string[];
 let numberList : Array<number>;

 empList = ["Hello", "World"];
 numberList = [1,2,3,4,5];

 let newNum = numberList[5];
 console.log(newNum);

 let result = numberList.filter((num)=>num>2);
 console.log(result);

 enum Color {
    Red,
    Green,
    Blue
 }

 let c:Color = Color.Blue;

 let swapNum : [first:number,second:number];

 function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1]
 }

 swapNum = swapNumbers(10,20);

 let department: any; // Any is a datatype too. Can be assigned any value. A variable to go to the Static Type Dimension of coding. Do not use it.