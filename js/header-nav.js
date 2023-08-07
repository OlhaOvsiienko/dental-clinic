const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.menu-btn');
const menuContent = document.querySelector('.content-menu');
const bodyLock = document.querySelector('body');
menuBtn.addEventListener("click", showMenu);

function showMenu() {
mobileMenu.classList.toggle('active');
menuBtn.classList.toggle('active');
menuContent.classList.toggle('active');
bodyLock.classList.toggle('lock');
}

function hideMobMenu() {
    
    if (window.matchMedia("(min-width: 992px)").matches) {
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('active');
        menuContent.classList.remove('active');
        bodyLock.classList.remove('lock');
    }
  }

window.addEventListener('resize', hideMobMenu);
