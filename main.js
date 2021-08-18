
var productDetailsLink = document.querySelector('.product-details-link');
var sizeFitLink = document.querySelector('.size-fit-link');
var reviewsLink = document.querySelector('.reviews-link');

var productDetailsEl = document.querySelector('#productDetails');
var sizeFitEl = document.querySelector('#sizeFit');
var reviewsEl = document.querySelector('#reviews');


console.log('links', productDetailsLink, sizeFitLink, reviewsLink);

function togglePages(el){
  console.log("el", el.classList.contains('product-details-link'));
  if(el.classList.contains('product-details-link')){
    productDetailsEl.classList.remove('hidden');
    sizeFitEl.classList.add('hidden');
    reviewsEl.classList.add('hidden');
  }
  else if(el.classList.contains('size-fit-link')){
    sizeFitEl.classList.remove('hidden');
    productDetailsEl.classList.add('hidden');
    reviewsEl.classList.add('hidden');
  }
  else{
    reviewsEl.classList.remove('hidden');
    productDetailsEl.classList.add('hidden');
    sizeFitEl.classList.add('hidden');
  }
};


// // console.log('Hello, World!');
//
// var age = 30;
//
// age = 31;
//
// // console.log(age);
//
// var message = "welcome to JS";
//
//
// console.log(message, message, message, message);
//
//
// var fifty = 50;
// var hundred = 100;
// var fiveHundred = 500;
//
// var sum = fifty + hundred + fiveHundred
//
// console.log(sum);
//
// var person = {
//   name : "jenny",
//   age : 28,
//
// }
// console.log(person);
//
// person.pet = 'tucker';
//
// console.log(person);
//
// console.log(typeof person);
//
// var students = ["Alejandra", "Jesse", "Jessica", "Tamar"];
// console.log(students[1]);
//
// students[1] = 'Kate';
// console.log(students[1]);
//
// console.log(students);
//
//
// function double(a){
//   return a * 2;
// }
//
// console.log(double(3));
//
//
// function half(number){
//   return number /2 ;
// }
// var result = half(100);
//
// console.log(result);
//
//
// function sentence(a,b){
//   return a + b;
// }
//
// var speech = sentence('howdy ', 'folks!');
//
// console.log(speech);
//
// function difference(a,b){
//   return a - b;
// }
//
// console.log(difference(4, 6));







//
