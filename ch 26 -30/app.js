var num1 = +prompt("Enter any positive integar");
document.write("User number : " + num1 + "<br>");
document.write("Round off :" + Math.round(num1) + "<br>");
document.write("Floor :" + Math.floor(num1) + "<br>");
document.write("Ceil :" + Math.ceil(num1) + "<br>");

var num1 = +prompt("Enter any negative integar");
document.write("User number : " + num1 + "<br>");
document.write("Round off :" + Math.round(num1) + "<br>");
document.write("Floor :" + Math.floor(num1) + "<br>");
document.write("Ceil :" + Math.ceil(num1) + "<br>");

var num1 = +prompt("Enter any integar");
document.write("Absolute number : " + Math.abs(num1) + "<br>");

var dice = Math.random() * 7;
var dice2 = Math.floor(dice);
document.write("Dice random number is : " + dice2);

var head = prompt("Enter your head value");
var tail = prompt("Enter your tail value");
var result = Math.random() * 2;
var result2 = Math.floor(result);
if (result2 === 0) {
  alert(head + " Congratulations head wins");
} else {
  alert(tail + " Congratulations head wins");
}

var ran = Math.random() * 100;
var ran2 = Math.floor(ran);
document.write("random number between 1 and 100 : " + ran2 + "<br>");

var weight = prompt("Enter your weight in kilograms");
document.write(parseInt(weight));

var secretnum = Math.random() * 10;
var secretnum2 = Math.floor(secretnum);
var secretnum3 = +prompt("Enter any number between 1 and 10 ");
if (secretnum2 === secretnum3) {
  alert("Congratulation you guess right");
} else {
  alert("Try again");
}
