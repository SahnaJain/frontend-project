function validateLogin() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email === "testuser@example.com" && password === "test1234") {
    alert("Login successful!");
    return true;
  } else {
    alert("Invalid email or password.");
    return false;
  }
}
