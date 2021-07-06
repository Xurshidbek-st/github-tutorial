"use strict";
/*let selectedColors = ['oq', 'yashil'];
console.log(selectedColors);

let person = {
    age: 24,
    name: "serw",
    country: "Milano"
};

console.log(person.age)

function greet(firstName, lastName){
    console.log('Assalomu alaykum ' + firstName)
}

greet('Ahmad');

let answers = [],
questions = ['Ismiz kim?', 'Yoshiz nechida?', 'Qayerliksiz?'];
for(let i=0;i<questions.length;i++){
    answers[i]=prompt(questions[i], '')
}
console.log(answers);

let x = 7;
console.log(++x);

let points = 70;
let result = points > 6 0 ? 'o`tdi' : 'o`tamdi';
console.log(result);

let color1 = 'oq';
let color2 = 'qizil';
let selectedColors = color1;
color1 = color2;
color2 = selectedColors;

console.log(color1);
console.log(color2);*/

let a = 3,
  b = 4,
  c = 1;
let d = (b ** 2 - 4 * a * c) ** 0.5;
if (d > 0) {
  let x = ((-b - d ** 0.5) / 2) * a;
  let y = ((-b + d ** 0.5) / 2) * a;
  console.log(x, y);
} else console.log("NO");
