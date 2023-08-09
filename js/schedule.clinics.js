// PhoneCall
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

// Email
function emailNY() {
  const clinicEmail = document.getElementById('ny-clinic-email').getAttribute('href');
  window.location.href = clinicEmail;
}

document.getElementById('ny-clinic-email').addEventListener("click", emailNY);

function emailLA() {
  const clinicEmail = document.getElementById('la-clinic-email').getAttribute('href');
  window.location.href = clinicEmail;
}

document.getElementById('la-clinic-email').addEventListener("click", emailLA);

