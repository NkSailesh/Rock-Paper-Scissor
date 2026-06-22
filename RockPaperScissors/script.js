 function ComputerChoices(){
             let CompChos='';
            let random=Math.random();
            if(random>0 &&random<1/3){
                CompChos='Rock';
            }
            else if(random>1/3 && random<2/3){
                CompChos='Paper';
            }
            else if(random>2/3 && random<1){
                CompChos='Scissor';
            }
            return CompChos;
        }