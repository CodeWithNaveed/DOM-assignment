let score_JS = 20
let randomNumber = Math.floor(Math.random() * 20) + 1
let hiden_number = document.getElementById("hiden_number")
let score_number = document.getElementById("score_number")

function check() {
    let message = document.getElementById("message")
    score_JS -= 1 

    if (score_JS  >= 1 && randomNumber !== number_input.value) {
        // let number_input = document.getElementById("number_input").value
        score_number.innerText = score_JS
    }
    
    if (number_input.value == randomNumber) {
        message.innerText = "You've Won The Game :)"
        hiden_number.innerHTML = randomNumber
        btn_check.style.display = "none"
        number_input.setAttribute("disabled", "true")
    } else if (number_input.value > randomNumber) {
        message.innerText = "Too High"
    } else if (number_input.value < randomNumber) {
        message.innerText = "Too Low"
    }
    if (score_number.innerText == 1) {
        message.innerText = "You've Lost The Game :("
        number_input.setAttribute("disabled", "true")
        btn_check.style.display = "none"
    } 
}

function playAgain() {
    location.reload()
}