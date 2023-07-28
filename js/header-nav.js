const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation-links');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
});