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
let userName=prompt("Who's there?","");
if(userName === "Admin"){
  let password=prompt("Password?","");
  if(password === "TheMaster"){
    alert("Welcome!");
  }else if(password=== "" || password===null){
    alert("Canceled");
  }else{
    alert("Wrong password");
  }
}else if(userName=== "" || userName === null){
  alert("Canceled");
}else{
  alert("I don't know you");
}