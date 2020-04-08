// 'Math.sign()' function is used to check if a number is Positive or Negative.
// The Math.sign() function returns a Positive or Negative (+ or -) 1, which indicates the sign of the number passed into the argument.
// If the number passed into Math.sign is 0, then it will return a (+ or -) 0.
// Note if a Number is Positive, then an explicit (+) will not be returned.
// The Math.sign() function returns 1 for Positive Sign & -1 for Negative Sign.
// If the argument passed into Math.sign is not a Number i.e., anything other than a number then the function returns NaN.
// SYNTAX : Math.sign(number)

console.log('JavaScript Math.sign() Method');   //JavaScript Math.sign() Method
const positive = 6;
console.log(Math.sign(positive));   //1
const negative = -9.87;
console.log(Math.sign(negative));    //-1
console.log(Math.sign(-12));    //-1

console.log(Math.sign(0));  //0
console.log(Math.sign(-0)); //-0

const str = 'Hello World';
console.log(Math.sign(str));    //NaN
