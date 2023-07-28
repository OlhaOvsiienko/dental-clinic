function checkPhoneNumberFormat() {
  const phoneInput = document.getElementById("phone");
  const errorMessage = document.getElementById("errorMessage");

  const phonePattern = /^\d{12}$/;
  if (!phonePattern.test(phoneInput.value)) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}

function validateForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const dentist = document.getElementById("dentist").value;
  const clinic = document.getElementById("clinic").value;

  if (
    name.trim() === "" ||
    phone.trim() === "" ||
    dentist === "" ||
    clinic === ""
  ) {
    document.getElementById("errorMessage").style.display = "block";
    return false;
  }

    return true;
}