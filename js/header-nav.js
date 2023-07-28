const menu = document.querySelector('.navigation-links');
const menuIcon = document.querySelector('.hamburger');
const menuIconItem = document.querySelector('.bar');
menuIcon.addEventListener("click", showNaw);

function showNaw() {
    menu.classList.toggle('active');
    menuIconItem.classList.toggle('active');
}

