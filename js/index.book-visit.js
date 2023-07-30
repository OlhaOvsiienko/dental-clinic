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

  // Если все проверки прошли успешно, скрываем сообщения об ошибках и отправляем данные на endpoint
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
    return; // Если форма не валидна, не отправляем данные
  }

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const dentist = document.getElementById("dentist").value;
  const clinic = document.getElementById("clinic").value;
  const message = document.getElementById("message").value;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("dentist", dentist);
  formData.append("clinic", clinic);
  formData.append("message", message);

  const response = await fetch("https://formspree.io/f/mbjvjloy", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    document.getElementById("bookingFormStatus").style.display = "block"; // Показать элемент
    document.getElementById("bookingFormStatus").innerHTML = "Спасибо за ваш запрос!";
    bookingForm.reset();
  } else {
    document.getElementById("bookingFormStatus").style.display = "block"; // Показать элемент
    document.getElementById("bookingFormStatus").innerHTML = "Упс! Произошла ошибка при отправке формы";
  }
}

document.getElementById("sendButton").addEventListener("click", handleSubmit);

bookingForm.addEventListener("submit", handleSubmit);

