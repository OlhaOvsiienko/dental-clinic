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
      alert("Fill in required fields");
      return false;
    }
    return true;
  }