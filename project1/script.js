alert("Done")
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
    while(!["rock","paper","scissor"].includes(userInput)){
        alert("Invalid input ,Please enter String rock/paper/scissor")
        userInput=prompt("Enter your choices (String rock/paper/scissor)");
    }
    // console.log(userInput);
    return userInput;
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
    if(UsetChoices=== "scssi"){

    }

}