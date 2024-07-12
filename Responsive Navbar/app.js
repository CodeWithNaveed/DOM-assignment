let navbar = document.getElementById("navbar");
let menu_bar = document.getElementById("menu_bar");

menu_bar.addEventListener('click', function () {
    navbar.classList.toggle('navbar_active');
});