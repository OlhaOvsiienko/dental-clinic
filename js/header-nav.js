// const menu = document.querySelector('.mobile-menu');
// const menuIcon = document.querySelector('.menu-btn');
// const menuIconItem = document.querySelector('.bar');
// const menuContent = document.querySelector('.content-menu');
// const bodyLock = document.querySelector('body');
// menuIcon.addEventListener("click", showMenu);

// function showMenu() { 
//     menu.classList.toggle('active');
//     menuIconItem.classList.toggle('active');
//     menuContent.classList.toggle('active');
//     menuIcon.classList.toggle('active');
//     bodyLock.classList.toggle('lock');
// }

const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu-btn');
const menuContent = document.querySelector('.content-menu');
const bodyLock = document.querySelector('body');
menuIcon.addEventListener("click", showMenu);

function showMenu() {
mobileMenu.classList.toggle('active');
menuBtn.classList.toggle('active');
menuContent.classList.toggle('active');
bodyLock.classList.toggle('lock');
}

