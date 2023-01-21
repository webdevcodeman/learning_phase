"use strict";
const num=+prompt("Enter the number till you find the prime numbers:");
if(num<2){
  alert("Prime number only exists from number greater than 1.");
}else{
  let primeNumbers=`Prime numbers till ${num}:`;
  nextPrime:
  for(let i=2;i<=num;i++){
    let j=2;
    const cond=Math.floor(Math.sqrt(i));
    // console.log(i);
    // console.log(cond);
    for(;j<=cond;j++){
      // console.log(j);
      if(i%j===0){
        continue nextPrime;
      }
    }
    primeNumbers+=` ${i}`;
  }
  alert(primeNumbers);
}