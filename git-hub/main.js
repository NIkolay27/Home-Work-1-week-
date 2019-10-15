let string = 'some test string'; 

//1
let up = (string[0].toUpperCase()).concat(string.slice(1, -1), string[string.length - 1].toUpperCase());
console.log(up);

//2
let str = string.indexOf('string');
console.log(str);

//3
let space;
space = string.indexOf(' ', 5); 
//or
space = string.lastIndexOf(' ');
console.log(space);

//4
let symbol = string.slice(5, 9);
console.log(symbol);

//5
let pi = Math.PI.toFixed(2); 
console.log(pi)

//6
let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(max, min);

//7
let random = Math.random().toFixed(2);
console.log(random);

//8
let rand = Math.random() * 45 + 1;
console.log(rand);

//9
let sum;
sum = 0.6 + 0.7;
sum = parseFloat(sum.toFixed(2));
console.log(sum)

//10
let phone;
phone = { product: 'iPhone' };
phone.price = '1000';
phone.currency = 'dollar';
phone.details = {};
phone.details.model = '';
phone.details.color = '';
console.log(phone);