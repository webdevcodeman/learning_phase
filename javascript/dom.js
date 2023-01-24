"use strict";
// const container=document.querySelector("#container");
// const content=document.createElement("div");
// content.classList.add("content");
// content.textContent="This is the glorious text-content!";
// container.appendChild(content);
// const paragraph=document.createElement("p");
// paragraph.textContent="Hey I'm red!";
// paragraph.setAttribute("style","color:red;");
// container.appendChild(paragraph);
// const header=document.createElement("h3");
// header.textContent="I'm a blue h3";
// header.setAttribute("style","color:blue;");
// container.appendChild(header);
// const anotherContainer=document.createElement("div");
// anotherContainer.setAttribute("style","border:1px solid black;background:pink");
// const anotherHeader=document.createElement("h1");
// anotherHeader.textContent="I'm in a div";
// anotherContainer.appendChild(anotherHeader);
// const anotherParagraph=document.createElement("p");
// anotherParagraph.textContent="ME TOO!";
// anotherContainer.appendChild(anotherParagraph);
// container.appendChild(anotherContainer);
// const btn=document.querySelector("#btn");
// btn.onclick=alertFunction;
// const btn=document.querySelector("#btn");
// btn.addEventListener("click",alertFunction);
// function alertFunction(e){
//   alert("YAY! YOU DID IT!");
//   // console.log(e.target);
//   e.target.style.background="blue";
// }
const buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
  button.addEventListener("click",()=>{
    alert(button.id);
  });
});