// The foreach() method is used to iterate through the elements of an Array.

// In otherwords, the foreach() method executes a provided function once for each Array Element. 

// Consider the below example.

console.log('JavaScript forEach() Loop');    //JavaScript forEach() Loop 
const numbers = [1,2,3,4,5];
console.log(numbers);       //[1,2,3,4,5]

numbers.forEach(printArray);

function printArray(item,index,arr){
    console.log('a['+index+']'+' = '+item);
}
// The Above Function prints The Array Contents as Follows...
//  a[0] = 1
//  a[1] = 2
//  a[2] = 3
//  a[3] = 4
//  a[4] = 5

//We can also write it as,
numbers.forEach((item,index,arr)=>{
    console.log(item);
});
// The Above Function prints The Array Contents as Follows...
//  1
//  2
//  3
//  4
//  5

//We can also use it to calculate the Sum of the Number in the Array.

let sum = 0;
numbers.forEach(item => {
    sum+=item;
});

console.log(`Sum is : ${sum}`); //Sum is : 15

//we can also use it to find the occurence of an element in an Array.
const letters = ['a','b','c','a','c','d'];
let count = {};

letters.forEach((item)=>{
    if(count[item])
    {
        count[item]++;
    }else{
        count[item] = 1;
    }
}
);

console.log(count); //{ a: 2, b: 1, c: 2, d: 1 }
