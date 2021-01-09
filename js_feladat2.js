let a = window.prompt("Add meg 'a' értékét!");
let b = window.prompt("Add meg 'b' értékét!");
a = Number.parseInt(a);
b = Number.parseInt(b);
let sum = a + b;
let mult = a * b;
let pi = 3.14;
let c = Math.pow(a, a) + Math.pow(b, b);

console.log('Összeg: ' + sum);
console.log('Szorzat: ' + mult);
console.log('A hatványa önmagával: ' + Math.pow(a, a));
console.log('A hatványa b-vel: ' + Math.pow(a, b));
console.log('Kör kerülete: ' + 2 * pi * (a / 2));
console.log('Kör területe: ' + pi * Math.pow(b, 2));
console.log('Pitagorasz c: ' + Math.sqrt(c));



