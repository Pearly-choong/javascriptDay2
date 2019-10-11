// conditional statement
// to ifnd the bigger number among two values
//==========================
var firstNumber = 56;
var secondNumber = 27;

console.log(firstNumber, secondNumber);

if (firstNumber > secondNumber){
  document.getElementById('result').innerHTML = firstNumber + ' is the biggest <br>';
} else {
  document.getElementById('result').innerHTML = secondNumber + ' is the biggest <br>';
}

var age1 = 46;
var age2 = 34;
var age3 = 6;

if ((age1 > age2) && (age1 > age3)) {
  document.getElementById('result').innerHTML = age1 + ' is the biggest <br>';
} else if (age2 > age3){
  document.getElementById('result').innerHTML = age2 + ' is the biggest <br>';
} else {
  document.getElementById('result').innerHTML = age3 + ' is the biggest <br>';
}


// calculate coffee price consider discount... condition 5 coffee
//==========================
var coffeePrice = 3.45;
var quantity = prompt('how many coffee(s)?');

var cost = coffeePrice * quantity;

var coffeeType = prompt('What coffee - espresso or flatwhite?');

var discountedCost = coffeePrice * (95 / 100) * quantity;

if (coffeeType == "espresso") {
  document.getElementById('coffeeImage').innerHTML = '<img src="images/espresso.png" alt="espresso">';
} else if (coffeeType == 'flatwhite') {
  document.getElementById('coffeeImage').innerHTML = '<img src="images/flatwhite.jpg" alt="flatwhite">';
}

if (quantity >= 5) {
   document.getElementById('result').innerHTML = "</br> </br>The bill is $" + discountedCost ;
} else {
  document.getElementById('result').innerHTML = "</br> </br>The bill is $" + cost;
}



// calculate muffin price
//==========================
var muffinQuantity = prompt('how many muffin(s)?');

if (muffinQuantity < 9) {
  var muffinPrice = 2.35;
} else if (muffinQuantity <= 25){
  var muffinPrice = 2.10;
} else {
  var muffinPrice = 1.90;
}

var muffinCost = muffinPrice * muffinQuantity;

document.getElementById('result').innerHTML = '</br> Your muffin cost $ ' + muffinCost;


// calculate steak price
// parseInt is to convert string into integer
//==========================
var steakQuantity = parseInt(prompt('how many steak?'));
var steakPrice = 25.60;
var sauceQuantity = 0;


if (steakQuantity = 2) {
  document.getElementById('result').innerHTML = ' you will get a free steak ';
  var sauce = prompt('do you want the sauce?');
  if (sauce === "yes") {
    var sauceQuantity = parseInt(prompt('how many sauce?'));
  }
} else if (steakQuantity = 4) {
  document.getElementById('result').innerHTML = ' you will get two free steak ';
}

console.log(steakQuantity, sauceQuantity);
var steakCost = steakQuantity * 25.60 + sauceQuantity * 2;
console.log(steakCost);
document.getElementById('result').innerHTML += "<br> steakCost = $ " + steakCost.toFixed(2);
