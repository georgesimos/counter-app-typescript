let myString: string;
let myNum: number;
let myBool: boolean;
let any: any;

/*
let strArr: string[]; //Array of strings
let numArr: number[]; //Array of numbers
let boolArr: boolean[]; //Array of booleans
*/
// Same as above
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = 'hello world';
myNum = 20;
myBool = true;
any = { value: 5 }

strArr = ['hello', 'hey']
numArr = [1, 2, 3, 4, 5]
boolArr = [true, true, false]

strNumTuple = ['string', 4]

let myVoid: void = null;
let myVoid2: void = undefined;
let myNull: void = null;
let myUndefined: void = undefined;

console.log(myString, myNum, myBool, any, strArr);