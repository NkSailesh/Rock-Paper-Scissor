alert("Done")
console.log("Hello Sk")
let x;
function getComputerChoice(ran){
x= Math.floor( Math.random()*ran);

if(x<=2){
    return "rock";
}
else if(x<=3){
    return "paper";
}
else{
    return "scissors";
}
// return x;
}
console.log(getComputerChoice(5));

