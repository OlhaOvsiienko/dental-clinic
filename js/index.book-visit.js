document.addEventListener('DOMContentLoaded', function() {
  
  const bookingForm = document.getElementById("bookingForm");
  const sendButton = document.getElementById("sendButton");

  function validateForm() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const dentist = document.getElementById("dentist").value;
    const clinic = document.getElementById("clinic").value;

    const errorMessageName = document.getElementById("errorMessageName");
    const errorMessagePhone = document.getElementById("errorMessagePhone");
    const errorMessageDentist = document.getElementById("errorMessageDentist");
    const errorMessageClinic = document.getElementById("errorMessageClinic");
    const status = document.getElementById("bookingFormStatus");

    if (name.trim() === "") {
      errorMessageName.style.display = "block";
      return false;
    }

    const phonePattern = /^\d{12}$/;
    if (!phonePattern.test(phone)) {
      errorMessagePhone.style.display = "block";
      return false;
    }

    if (dentist === "") {
      errorMessageDentist.style.display = "block";
      return false;
    }

    if (clinic === "") {
      errorMessageClinic.style.display = "block";
      return false;
    }

    errorMessageName.style.display = "none";
    errorMessagePhone.style.display = "none";
    errorMessageDentist.style.display = "none";
    errorMessageClinic.style.display = "none";
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

  if (sendButton) {
    sendButton.addEventListener("click", handleSubmit);
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", handleSubmit);
  }
});

