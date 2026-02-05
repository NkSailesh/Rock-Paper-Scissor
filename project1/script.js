
// console.log("Hello Sk")
// function getComputerGeneretion(){
//     const random_string=["rock","paper","scissor"];
// const randomchoices=Math.floor(Math.random()*3);
// return random_string[randomchoices];
// // console.log(random_string[randomchoices]);
// }

// // getComputerGeneretion();

// function getUserChoices(){
//     let userInput=prompt("enter your choices (String rock/paper/scissor)");
//     let LowerCaseInput= userInput.toLowerCase();
//     while(!["rock","paper","scissor"].includes(LowerCaseInput)){
//         alert("Invalid input ,Please enter String rock/paper/scissor")
//         LowerCaseInput=prompt("Enter your choices (String rock/paper/scissor)");
//     }
//     // console.log(userInput);
//     return LowerCaseInput;
// }
// // getUserChoices();
// function Indentifay_Winner(UsetChoices,ComputerChoices){
//     if(UsetChoices===ComputerChoices){
//         return "It's tai";
//     }
//     if(UsetChoices==="rock"){
//         if(ComputerChoices=== "scissor"){
//             return "You win!!!";

//         }
//         else{
//             return "You lose....";
//         }
//     }
//     if(UsetChoices=== "paper"){
//         if(ComputerChoices=== "rock"){
//             return "You win!!!";

//         }
//         else{
//             return "You lose....";
//         }

//     }
//     if(UsetChoices=== "scissor"){
//         if(ComputerChoices==="paper"){
//             return "You win!!!";

//         }
//         else{
//             return "you lose....";
//         }

//     }

// }


// function PlayRound(){
//     let Userchus= getUserChoices();
//     let ComputerChus = getComputerGeneretion();
//      console.log(Indentifay_Winner(Userchus,ComputerChus));
//     console.log("Your choise is:- "+ Userchus);
//     console.log("Computer choise is:- "+ ComputerChus);
   
// }
// PlayRound();
// // let ver1="Rock";
// // console.log(ver1.toLowerCase());

// function Ar(string){
//     return string.startsWith("d");
// }
// let arr1=["as","df","gh","dj"];
// // let ar= arr1.map(Ar);
// let ar= arr1.filter(Ar);
// console.log(ar);

//----____DOM___----

// const cont=document.querySelector(".display");
// const dis=cont.previousElementSibling;
// console.log(dis);
const contanor=document.querySelector(".display");
const div=  document.createElement("div");
       div.innerText="Hi this text from js";
       div.style.backgroundColor="blue";
       div.style.color="white";
//      div.innerHTML=  "<span>Hello World!</span>";
       contanor.appendChild(div);

       const btn=document.querySelector("#btnn");
       function conlog(){
        console.log("Btn works properly");  
        // alert("Btn works properly with print in console");    
       }
       btn.onclick=conlog;
// btn.addEventListener("click", function (e) {
//   e.target.style.background = "red";
// });
btn.addEventListener("click", function (e) {
  e.target.style.background = "black";
});
const loop1= document.querySelector("#loop");
        loop1.forEach((loop) => {
                loop.addEventListener("click",()=>{alert("loop1")

                });
                
        });
//         loop1.forEach((loop) => {
//   // and for each one we add a 'click' listener
//   loop.addEventListener("click", () => {
//     alert(loop.id);
//   });
// });