document.getElementById("phone-number").addEventListener("click", callNumber);

function callNumber () {
    let phoneNumber = document.getElementById('phone-number').value;
    window.open('tel:${phoneNumber}');
}