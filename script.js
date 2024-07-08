const Rock = document.querySelector("#Rock")
const Scissors = document.querySelector("#Scissors")
const Paper = document.querySelector("#Paper")
let user_score =0;
let comp_score =0

function check_winner(comp, user) {
    const user_result = document.querySelector("#User_result");
    const com_result = document.querySelector("#Comp_result");
    const result = document.querySelector("#status");
    if (comp === user) {
        result.innerText = "Result: Draw";
    } else if (comp === 2) { // comp is Rock
        if (user === 1) { // user is Paper
            user_result.innerText = `You: ${++user_score}`;
            result.innerText = "Result: You won";
        } else { // user is Scissors
            com_result.innerText = `Computer: ${++comp_score}`;
            result.innerText = "Result: Computer won";
        }
    } else if (comp === 1) { // comp is Paper
        if (user === 3) { // user is Scissors
            user_result.innerText = `You: ${++user_score}`;
            result.innerText = "Result: You won";
        } else { // user is Rock
            com_result.innerText = `Computer: ${++comp_score}`;
            result.innerText = "Result: Computer won";
        }
    } else if (comp === 3) { // comp is Scissors
        if (user === 2) { // user is Rock
            user_result.innerText = `You: ${++user_score}`;
            result.innerText = "Result: You won";
        } else { // user is Paper
            com_result.innerText = `Computer: ${++comp_score}`;
            result.innerText = "Result: Computer won";
        }
    }
    console.log(`user ${user} comp ${comp}`)
}

const get_Img_Input = function(num){
    const image = document.createElement("div")
  
    switch(num){
        case 1:{
            image.innerHTML = "<img src='paper.avif' alt='paper'  id='Paper'>"
            break;
        }
        case 2:{
            image.innerHTML =  "<img src='rock.jpg' alt='rock' style='height:200px' id='Rock'>"
            break;
        }
        case 3:{
            image.innerHTML = "<img src='scissors.jpg' alt='scissors'  id='Scissors'>"
            break;
        }
    }
    return image
}
let Computer_random_no;
const computerInput = function(){
    const randNum  = Math.floor(Math.random()*3)+1
    Computer_random_no = randNum
    const parent = document.querySelector("#Computer_Input")
    if(parent.childElementCount>1){
        const temp = parent.childNodes[1]
       parent.replaceChild(get_Img_Input(randNum),temp)
    }
    else
     parent.appendChild(get_Img_Input(randNum))
}


Paper.addEventListener("click",()=>{
    const parent = document.querySelector("#User_input")
    if(parent.childElementCount>1){
        const temp = parent.childNodes[1]
       parent.replaceChild(get_Img_Input(1),temp)
    }
    else
     parent.appendChild(get_Img_Input(1))
     computerInput()
     check_winner(Computer_random_no,1)
})

Rock.addEventListener("click",()=>{
    const parent = document.querySelector("#User_input")
    if(parent.childElementCount>1){
        const temp = parent.childNodes[1]
       parent.replaceChild(get_Img_Input(2),temp)
    }
    else
     parent.appendChild(get_Img_Input(2))
     computerInput()
     check_winner(Computer_random_no,2)
})

Scissors.addEventListener("click",()=>{
    const parent = document.querySelector("#User_input")
    if(parent.childElementCount>1){
        const temp = parent.childNodes[1]
       parent.replaceChild(get_Img_Input(3),temp)
    }
    else
     parent.appendChild(get_Img_Input(3))
     computerInput()
     check_winner(Computer_random_no,3)
})