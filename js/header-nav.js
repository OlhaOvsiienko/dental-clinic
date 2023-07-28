/*const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation-links');
menuBtn.addEventListener('click', function(){
	menu.style.transform = translateY(0);
});

	transition: transform 0.5s;  */

function showNaw () {
    const menu = document.querySelector('.navigation-links');
    menu.style.transform = translateY(0);
    menu.style.transition = transform 0.5s;
}

document.querySelector('.hamburger').addEventListener("click", showNaw);