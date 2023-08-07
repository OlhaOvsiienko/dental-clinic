




const scheduleForm = document.getElementById("scheduleForm");
function validateScheduleForm() {
  const nameSchedule = document.getElementById("nameSchedule").value;
  const phoneSchedule = document.getElementById("phoneSchedule").value;
  
  if (nameSchedule.trim() === "") {
    document.getElementById("errorMessageName").style.display = "block";
    return false;
  }

  const phoneSchedulePattern = /^\d{12}$/;
  if (!phoneSchedulePattern.test(phoneSchedule)) {
    document.getElementById("errorMessagePhone").style.display = "block";
    return false;
  }

  document.getElementById("errorMessageName").style.display = "none";
  document.getElementById("errorMessagePhone").style.display = "none";
  return true;
}
async function handleSubmitShedule(event) {
  event.preventDefault();

  const isValid = validateScheduleForm();
  if (!isValid) {
    return;
  }

  const response = await fetch("https://formspree.io/f/mbjvdzng", {
    method: "POST",
    body: new FormData(scheduleForm),
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    document.getElementById("scheduleFormStatus").style.display = "block";
    document.getElementById("scheduleFormStatus").innerHTML =
      "Congratulations! Your application is accepted!";
    scheduleForm.reset();
  } else {
    document.getElementById("scheduleFormStatus").style.display = "block";
    document.getElementById("scheduleFormStatus").innerHTML =
      "Oops! An error occurred while submitting the form";
  }
}

document.getElementById("sendScheduleButton").addEventListener("click", handleSubmitShedule);

scheduleForm.addEventListener("submit", handleSubmitShedule);
