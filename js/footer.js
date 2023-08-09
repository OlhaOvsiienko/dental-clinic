// function callNY () {
//     const phoneNumberNY = document.getElementById('phone-numberNY').textContent;
//     window.open('tel:${phoneNumberNY}');
// }

// document.querySelector('.footer-phone-NY-description-link').addEventListener("click", callNY);

// function callLA () {
//     const phoneNumberLA = document.getElementById('phone-numberLA').textContent;
//     window.open('tel:${phoneNumberLA}');
// }

// document.querySelector('.footer-phone-LA-description-link').addEventListener("click", callLA);


function callNumberNY() {
    const clinicPhoneNumber = document.getElementById('ny-clinic-phone-number').textContent;
    window.open(`tel:${clinicPhoneNumber}`);
  }
  
  document.getElementById('ny-clinic-phone-number').addEventListener("click", callNumberNY);
  
  function callNumberLA() {
    const clinicPhoneNumber = document.getElementById('la-clinic-phone-number').textContent;
    window.open(`tel:${clinicPhoneNumber}`);
  }
  
  document.getElementById('la-clinic-phone-number').addEventListener("click", callNumberLA);