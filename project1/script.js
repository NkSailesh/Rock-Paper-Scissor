alert("Done")
console.log("Hello Sk")
let x;
// function getComputerChoice(ran){
// x= Math.floor( Math.random()*ran);

// if(x<=2){
//     return "rock";
// }
// else if(x<=3){
//     return "paper";
// }
// else{
//     return "scissors";
// }
// // return x;
// }
// console.log(getComputerChoice(5));
let y;
function getHumanChoice(y){
    if(y==1){
        console.log("Rock")
    }
     else if(y==2){
        console.log("Paper")
    }
     else{
        console.log("Scissors")
    }
}
let Human_Choice = prompt("Enter your Number-1/2/3");
getHumanChoice(Human_Choice);