function getRandomNumber(){
    let min = document.querySelector(".min").value;
    let max = document.querySelector(".max").value;
    let computerGuess = Math.floor(Math.random() * (max - min) + min)
    return computerGuess;
}

let computerGuess = Math.floor(Math.random() * 100)

async function higher(){
    document.querySelector(".fa-caret-up").setAttribute("style", "color: #f5cb5c; opacity: 1;")
}

async function lower(){
    document.querySelector(".fa-caret-down").setAttribute("style", "color: #f5cb5c; opacity: 1;")
}

function guess(){
    document.querySelector(".fa-caret-up").setAttribute("style", "color: white; opacity: .3;")
    document.querySelector(".fa-caret-down").setAttribute("style", "color: white; opacity: .3;")
    let uservalue = document.querySelector(".input-field").value;
        if(uservalue > computerGuess){
            lower();
        } else if(uservalue < computerGuess){
            higher();
        } else if (uservalue == computerGuess){
            document.querySelector(".input-field").value = "Congratulations, that's " + computerGuess + "!";
            setTimeout(function(){
                document.querySelector(".input-field").value = "";
                computerGuess = getRandomNumber();
            }, 3000)
        } else if(isNan(uservalue)){
            document.querySelector(".input-field").value = "That's not a number!";
        }
    return 0;
}

document.querySelector(".input-field").addEventListener("change", guess);
