// The map() method executes a given function on every Element from an Array and returns a new Array.

console.log('Javascript map() Method'); //Javascript map() Method
const arr = [1,2,3,4];

const newArr = arr.map(double);

function double(item,index,arr){
    return item * 2;
}

console.log(arr);   //[ 1, 2, 3, 4 ]
console.log(newArr);    //[ 2, 4, 6, 8 ]


const multiplyByIndex = arr.map(multiply);

function multiply(item,index,arr)
{
    return item * index;
}

console.log(multiplyByIndex);   //[ 0, 2, 6, 12 ]

const products = [
    {
        name: 'Keyboard',
        price: 1200,
        count: 5
    },{
        name: 'Monitor',
        price: 1500,
        count: 4
    },{
        name: 'Mouse',
        price: 650,
        count: 6
    }
];

const productsTotalValue = products.map(item=>({name: item.name,TotalValue:item.price * item.count}));

console.log(productsTotalValue);
/*
  [
    { name: 'Keyboard', TotalValue: 6000 },
    { name: 'Monitor', TotalValue: 6000 },
    { name: 'Mouse', TotalValue: 3900 }
  ]
*/

const str = ['7','8','9','9','3'];
console.log(str);   //[ '7', '8', '9', '9', '3' ]
const number = str.map(Number);
console.log(number);    //[ 7, 8, 9, 9, 3 ]
