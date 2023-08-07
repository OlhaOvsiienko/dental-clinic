document.querySelector('.footer-phone-description-link').addEventListener("click", callNumber);
document.querySelector('.footer-phone-LA-description-link').addEventListener("click", callNumber);

function callNumber () {
    const phoneNumber = document.getElementById('phone-number').value;
    window.open('tel:${phoneNumber}');
}




// function callNumberLA () {
//     const phoneNumberLA = document.getElementById('phone-numberLA').value;
//     window.open('tel:${phoneNumber}');
// }

