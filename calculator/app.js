const display = document.querySelector("#display")

function screenDisplay(screen) {
    display.value += screen
}

function equal() {
    var result = display
    result.value = eval (result.value)
}

function clearScreen() {
    display.value = ""
}


function deleteLast() {
    display.value = display.value.slice(0,-1)
}

