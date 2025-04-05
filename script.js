function validateRegisterForm() {
  const fullname = document.getElementById("fullname").value;
  const contact = document.getElementById("contact").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;

  if (fullname.length < 3) {
    alert("Full name must be at least 3 characters.");
    return false;
  }

  if (!/^\d{10}$/.test(contact)) {
    alert("Contact must be a 10-digit number.");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return false;
  }

  if (!gender) {
    alert("Please select a gender.");
    return false;
  }

  alert("Registered Successfully!");
  return true;
}

function validateLoginForm() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("All fields are required.");
    return false;
  }

  alert("Login successful!");
  return true;
}
