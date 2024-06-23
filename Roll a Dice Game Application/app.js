
const rollDiceNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 6); 
    document.querySelector(".turn").innerHTML = randomNumber
}

