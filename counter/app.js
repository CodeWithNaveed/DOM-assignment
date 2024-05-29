
let count = 0;
function updateCount() {
    document.getElementById('count').innerHTML = count;
}
function increase() {
    count++;
    updateCount();
}
function decrease() {
    count--;
    updateCount();
}
function reset() {
    count = 0;
    updateCount();
}