function callNumber () {
    const phoneNumber = document.getElementById('phone-number').value;
    window.open('tel:${phoneNumber}');
}

document.getElementById('phone-number').addEventListener("click", callNumber);

let link = document.querySelector('.footer-navigation-link');
link.style.color = "red";
