function callNY () {
    const clinicPhoneNumber = document.getElementById('phone-numberNY').innerHTML;
    window.open('tel:${clinicPhoneNumber}');
}

document.querySelector('.footer-phone-NY-description-link').addEventListener("click", callNY);

function callLA () {
    const clinicPhoneNumber = document.getElementById('phone-numberLA').innerHTML;
    window.open('tel:${clinicPhoneNumber}');
}

document.querySelector('.footer-phone-LA-description-link').addEventListener("click", callLA);


