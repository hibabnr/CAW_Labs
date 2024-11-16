// 1

let v1 = 20, v2 = 5;
[v1, v2] = [v2, v1];

console.log(v1, v2);

// 2
const numbers = [ 1, 2, 3 ];
const letters = [ "a", "b", "c" ]
const foods = ["mango", "pecan pie" ]

const array = numbers.concat(letters, foods);

console.log(array);

// 3

const string = "GOOD morning!";
const characters = [...string];
console.log(characters);

// 4

function fn(a,b,...args) {
    //...
    }

/*
A/  args = [3, 'A', 'B', 'C'];

B/  args = [];

C/  args = ['c', 'd'];

*/