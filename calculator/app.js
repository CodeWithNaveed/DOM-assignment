const display = document.querySelector("#display")

function screenDisplay(screen) {
    display.value += screen
}

function equal() {
    if(display.value !== ""){
        display.value = eval(display.value);
    } else {
        display.value = "";
    }
}

function clearScreen() {
    display.value = ""
}


function deleteLast() {
    display.value = display.value.slice(0,-1)
}

