function callNumber () {
    const phoneNumber = document.getElementById('phone-number').value;
    window.open('tel:${phoneNumber}');
}

document.getElementById('phone-number').addEventListener("click", callNumber);
