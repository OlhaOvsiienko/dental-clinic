const bookingForm = document.getElementById("bookingForm");
function validateForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const dentist = document.getElementById("dentist").value;
  const clinic = document.getElementById("clinic").value;
  const status = document.getElementById("bookingFormStatus");

  if (name.trim() === "") {
    document.getElementById("errorMessageName").style.display = "block";
    return false;
  }

  const phonePattern = /^\d{12}$/;
  if (!phonePattern.test(phone)) {
    document.getElementById("errorMessagePhone").style.display = "block";
    return false;
  }

  if (dentist === "") {
    document.getElementById("errorMessageDentist").style.display = "block";
    return false;
  }

  if (clinic === "") {
    document.getElementById("errorMessageClinic").style.display = "block";
    return false;
  }

  document.getElementById("errorMessageName").style.display = "none";
  document.getElementById("errorMessagePhone").style.display = "none";
  document.getElementById("errorMessageDentist").style.display = "none";
  document.getElementById("errorMessageClinic").style.display = "none";
  return true;
}
async function handleSubmit(event) {
  event.preventDefault();

  const isValid = validateForm();
  if (!isValid) {
    return;
  }

  const response = await fetch("https://formspree.io/f/mbjvjloy", {
    method: "POST",
    body: new FormData(bookingForm),
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    document.getElementById("bookingFormStatus").style.display = "block";
    document.getElementById("bookingFormStatus").innerHTML =
      "Congratulations! Your application is accepted!";
    bookingForm.reset();
  } else {
    document.getElementById("bookingFormStatus").style.display = "block";
    document.getElementById("bookingFormStatus").innerHTML =
      "Oops! An error occurred while submitting the form";
  }
}

document.getElementById("sendButton").addEventListener("click", handleSubmit);


bookingForm.addEventListener("submit", handleSubmit);
