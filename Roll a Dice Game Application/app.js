const Player1 = prompt("Enter player 1 name").toUpperCase();  
const Player2 = prompt("Enter player 2 name").toUpperCase();

const player_0 = document.querySelector("#player-0")
const player_1 = document.querySelector("#player-1")

const new_game_btn = document.querySelector("#new-game-btn");
const roll_dice_btn = document.querySelector("#roll-dice-btn"); 
const hold_dice_btn = document.querySelector("#hold-dice-btn");

let image_dice = document.querySelector(".image_dice"); 

let crrnt_score, scores, active_player;
function initialData(){
    document.querySelector(".player-0-container").classList.add("active_player");
    document.querySelector(".player-1-container").classList.remove("active_player");
  
    player_0.textContent = Player1;
    player_1.textContent = Player2;

    document.querySelector(`#score-0`).textContent = 0;
    document.querySelector(`#score-1`).textContent = 0;

    document.getElementById("roll-dice-btn").style.visibility = "visible";
    document.getElementById("hold-dice-btn").style.visibility = "visible";
    image_dice.style.visibility = "hidden";

    document.querySelector(`#current-score-0`).textContent = 0;
    document.querySelector(`#current-score-1`).textContent = 0;
   
    crrnt_score = 0
    scores = [0, 0];
    active_player = 0;
}
initialData()



// -----------------Roll Dice Button--------------------
roll_dice_btn.addEventListener("click", function() {
    image_dice.style.visibility = "visible";
    const numbers = Math.ceil(Math.random() * 6); 
    // image_dice.src = `images/dice-${numloooo}.png`;
    image_dice.setAttribute("src", `images/dice-${numbers}.png`);
    
    if(numbers !== 1){
        crrnt_score += numbers;
        document.querySelector(`#current-score-${active_player}`).textContent = crrnt_score;
    }

    else {
        document.querySelector(`#current-score-${active_player}`).textContent = 0;
        active_player = active_player === 0 ? 1 : 0;
        crrnt_score = 0;
        document.querySelector(".player-0-container").classList.toggle("active_player");
        document.querySelector(".player-1-container").classList.toggle("active_player");
    }
});

// -----------------Holl Dice Button--------------------
hold_dice_btn.addEventListener("click", function() {
    scores[active_player] += crrnt_score;
    document.getElementById(`score-${active_player}`).textContent = scores[active_player];
  
    if(scores[active_player] >= 20){
        document.getElementById(`player-${active_player}`).textContent = "Winner";
        document.getElementById("roll-dice-btn").style.visibility = "hidden";
        document.getElementById("hold-dice-btn").style.visibility = "hidden";
        document.querySelector(".image_dice").style.visibility = "hidden";
    }else{
        document.querySelector(`#current-score-${active_player}`).textContent = 0;
        active_player = active_player === 0 ? 1 : 0;
        crrnt_score = 0;
        document.querySelector(".player-0-container").classList.toggle("active_player");
        document.querySelector(".player-1-container").classList.toggle("active_player");
    }
});

// --------------------New Button------------------------
new_game_btn.addEventListener("click", function() { 
    initialData()
});