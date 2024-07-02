const button = document.querySelector("button");

button.addEventListener("click", function(){
    let score = 0;
    for(let i=0;i<5;i++){
        const humanChoice = window.prompt("Enter your choice: ").toLowerCase();
        const computerChoice = get_computer_choice();
        if(get_winner(computerChoice,humanChoice))
            {
                score++;
            }
    }
    window.alert("You won "+ score+" match out of 5 matches");
})


function get_winner(computerChoice,humanChoice){
    if( humanChoice==computerChoice){
        window.alert("Draw");
        return false;
    }
    else if(humanChoice == "rock"){
        if(computerChoice=="paper"){
            window.alert("You lost");
            return false;
        }
        else {
            window.alert("You won");
            return true;
        }
    }
       
    else if(humanChoice == "paper"){
        if(computerChoice=="scissors"){
            window.alert("You lost");
            return false;
        }
            
        else {
            window.alert("You won");
            return true;
        }
    }
    else if(humanChoice == "scissors"){
        if(computerChoice=="rock"){
            window.alert("You lost");
            return false;
        }
            else {
                window.alert("You won");
                return true;
            }
    }
    
    


}
function get_computer_choice(){
    const randNum = Math.round(Math.random()*3);
    switch(randNum){
        case 1: return "rock";
        case 2: return "paper";
        default: return "scissors"
    }
}