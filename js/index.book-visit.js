

async function validateForm() {
 
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const dentist = document.getElementById("dentist").value;
  const clinic = document.getElementById("clinic").value;

  
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

  try {
    // Отправка данных на endpoint с помощью Fetch API
    const formData = new FormData();
    formData.append("messageName", name);
    formData.append("phone", phone);
    formData.append("dentist", dentist);
    formData.append("clinic", clinic);
    formData.append("name", document.getElementById("message").value);

    const response = await fetch("https://formspree.io/f/mbjvjloy", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("An error occurred while submitting the form");
    }

    // При успешной отправке скрываем форму и показываем сообщение об успехе
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("successMessageJS").style.display = "block";
  } catch (error) {
    // При ошибке отправки можно обработать соответствующим образом
    console.error(error);
  }

  return true;
}


// Назначение обработчика события на кнопку "Send"
document.getElementById("sendButton").addEventListener("click", async function () {
  await validateForm();
});


/*async function validateForm() {
 
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const dentist = document.getElementById("dentist").value;
  const clinic = document.getElementById("clinic").value;

  
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

  try {
    // Отправка данных на endpoint с помощью Fetch API
    const formData = new FormData();
    formData.append("messageName", name);
    formData.append("phone", phone);
    formData.append("dentist", dentist);
    formData.append("clinic", clinic);
    formData.append("name", document.getElementById("message").value);

    const response = await fetch("https://formspree.io/f/mbjvjloy", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      bookingFormStatus.innerHTML = "Congratulations! You have successfully scheduled your visit! We will contact you";
      bookingForm.reset();
  } else {
    bookingFormStatus.innerHTML = "Oops! There was a problem submitting your form";
  }
      
      return true;
      
  }
  
// Назначение обработчика события на кнопку "Send"
document.getElementById("sendButton").addEventListener("click", async function () {
  await validateForm();
} as EventListener);*/
  
