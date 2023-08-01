const menu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.hamburger');
const menuIconItem = document.querySelector('.bar');
const menuContent = document.querySelector('.content-menu');

menuIcon.addEventListener("click", showMenu);

function showMenu() { 
    menu.classList.toggle('active');
    menuIconItem.classList.toggle('active');
    menuContent.classList.toggle('active');
}



