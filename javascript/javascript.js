"use strict";
// let message;
// message="Hello";
// let message="Hello!";
// alert(message);
// let user="John";
// let age=25;
// let message="Hello";
// message="World!";
// let hello="Hello world!";
// let message;
// message=hello;
// alert(hello);
// alert(message);
// let username;
// let test123;
// const myBirthday="18.04.1982";
// const  COLOR_RED="#F00";
// let color=COLOR_RED;
// alert(color);
// let admin;
// let name;
// name="John";
// admin=name;
// alert(admin);
// let ourPlanetname="Earth";
// let currentUserName="John";
// let sum=1+2+3+4+5+6;
// console.log(sum);
// console.log(((4+6+9)/77).toFixed(5));
// const max=57;
// let actual=max-13;
// let percentage=actual/max;
// percentage=percentage.toFixed(4);
// let userName=prompt("Who's there?","");
// if(userName=== "" || userName === null){
//   alert("Canceled");
// }else if(userName !== "Admin"){
//   alert("I don't know you");
// }else{
//   let password=prompt("Password?","");
//   if(password=== "" || password===null){
//     alert("Canceled");
//   }else if(password!== "TheMaster"){
//     alert("Wrong password");
//   }else{
//     alert("Welcome!");
//   }
// }
// let userName=prompt("Who's there?","");
// if(userName === "Admin"){
//   let password=prompt("Password?","");
//   if(password === "TheMaster"){
//     alert("Welcome!");
//   }else if(password=== "" || password===null){
//     alert("Canceled");
//   }else{
//     alert("Wrong password");
//   }
// }else if(userName=== "" || userName === null){
//   alert("Canceled");
// }else{
//   alert("I don't know you");
// }
// let officialName=prompt("What's the \"official\" name of JavaScript?","");
// if(officialName==="ECMAScript"){
//   alert("Right!");
// }else{
//   alert("You don't know? \"ECMAScript\"!");
// }
// let number=+(prompt("Enter a number.",0));
// if(number>0){
//   alert(1);
// }else if(number<0){
//   alert(-1);
// }else{
//   alert(0);
// }
// let result=(a+b<4)?"Below":"Over";
// let message=(login==="Employee")?"Hello":
//             (login==="Director")?"Greetings":
//             (login==="")?"No Login":
//             "";
// const day=new Date().getDay();
// switch(day){
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Error");
// }
// const grade=87;
// switch(true){
//   case grade>=90:
//     console.log("A");
//     break;
//   case grade>=80:
//     console.log("B");
//     break;
//   case grade>=70:
//     console.log("C");
//     break;
//   case grade>=60:
//     console.log("D");
//     break;
//   default:
//     console.log("F");
// }
// const month=new Date().getMonth();
// switch(month){
//   case 0:
//   case 1:
//   case 2:
//     console.log("Winter");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Autumn");
//     break;
//   default:
//     console.log("Error");
// }
// const birthYear=1948;
// const thisYear=1965;
// console.log("Age is "+(thisYear-birthYear)+".");
// console.log(`Age is ${(thisYear-birthYear)}.`);
// function checkAge(age){
//   if(age>=18){
//     return true;
//   }else{
//     return confirm("Do you have permission from your parents?");
//   }
// }
// function showMovie(age){
//   if(!checkAge(age)){
//     return;
//   }
//   alert("Showing you the movie");
// }
// let age=prompt("How old are you?",18);
// showMovie(age);
// if(checkAge(age)){
//   alert("Access granted");
// }else{
//   alert("Access denied");
// }
function pow(x,n){
  // return x**n;
  let result=x;
  for(let i=1;i<n;i++){
    result*=x;
  }
  return result;
}
let x=prompt("Enter x:",3);
let n=prompt("Enter n:",2);
if(n<1){
  alert(`Power ${n} is not supported, use a positive integer.`);
}else{
  alert(`pow(${x}, ${n}) = ${pow(x,n)}`);
}