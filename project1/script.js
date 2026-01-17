
console.log("Hello Sk")
function getComputerGeneretion(){
    const random_string=["rock","paper","scissor"];
const randomchoices=Math.floor(Math.random()*3);
return random_string[randomchoices];
// console.log(random_string[randomchoices]);
}

// getComputerGeneretion();

function getUserChoices(){
    let userInput=prompt("enter your choices (String rock/paper/scissor)");
    let LowerCaseInput= userInput.toLowerCase();
    while(!["rock","paper","scissor"].includes(LowerCaseInput)){
        alert("Invalid input ,Please enter String rock/paper/scissor")
        LowerCaseInput=prompt("Enter your choices (String rock/paper/scissor)");
    }
    // console.log(userInput);
    return LowerCaseInput;
}
// getUserChoices();
function Indentifay_Winner(UsetChoices,ComputerChoices){
    if(UsetChoices===ComputerChoices){
        return "It's tai";
    }
    if(UsetChoices==="rock"){
        if(ComputerChoices=== "scissor"){
            return "You win!!!";

        }
        else{
            return "You lose....";
        }
    }
    if(UsetChoices=== "paper"){
        if(ComputerChoices=== "rock"){
            return "You win!!!";

        }
        else{
            return "You lose....";
        }

    }
    if(UsetChoices=== "scissor"){
        if(ComputerChoices==="paper"){
            return "You win!!!";

        }
        else{
            return "you lose....";
        }

    }

}


function PlayRound(){
    let Userchus= getUserChoices();
    let ComputerChus = getComputerGeneretion();
     console.log(Indentifay_Winner(Userchus,ComputerChus));
    console.log("Your choise is:- "+ Userchus);
    console.log("Computer choise is:- "+ ComputerChus);
   
}
PlayRound();
// let ver1="Rock";
// console.log(ver1.toLowerCase());