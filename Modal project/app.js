setTimeout(function() {
    document.querySelector(".modal").style.display = "flex";
}, 2000)

const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", function() {
    document.querySelector(".modal").style.display = "none";
})