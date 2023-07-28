function validateForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const dentist = document.getElementById("dentist").value;
  const clinic = document.getElementById("clinic").value;

  document.getElementById("errorMessage").style.display = "none";
  document.getElementById("errorMessagePhone").style.display = "none";
  document.getElementById("errorMessageName").style.display = "none";

  if (name.trim() === "") {
    document.getElementById("errorMessageName").classList.add("active");
    return false;
  } else if (phone.trim() === "") {
    document.getElementById("errorMessagePhone").style.display = "block";
    return false;
  } else if (phone.replace(/\D/g, "").length !== 12) {
    document.getElementById("errorMessagePhone").style.display = "block";
    return false;
  } else if (dentist === "") {
    document.getElementById("errorMessage").style.display = "block";
    return false;
  } else if (clinic === "") {
    document.getElementById("errorMessage").style.display = "block";
    return false;
  }
  return true;
}