document.querySelector('.footer-phone-NY-description-link').addEventListener("click", callNY);


function callNY () {
    const phoneNumberNY = document.getElementById('phone-numberNY').value;
    window.open('tel:+1(234)567890');
}

document.querySelector('.footer-phone-LA-description-link').addEventListener("click", callLA);

function callLA () {
    const phoneNumberLA = document.getElementById('phone-numberLA').textContent;
    window.open('tel:phoneNumberLA');
}

