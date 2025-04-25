// Event listener for form submit
document.getElementById("registrationForm").addEventListener("submit", function(e) {
  if (!validateForm()) {
    e.preventDefault(); // Prevent form submission if validation fails
  }
});

// Function to validate full name
function validateName() {
  const name = document.getElementById("fullName").value;
  if (name.length < 5) {
    document.getElementById("nameError").innerText = "Full Name must be at least 5 characters";
    return false;
  } else {
    document.getElementById("nameError").innerText = "";
    return true;
  }
}

// Function to validate email
function validateEmail() {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "Enter a valid email ID";
    return false;
  } else {
    document.getElementById("emailError").innerText = "";
    return true;
  }
}

// Function to validate phone
function validatePhone() {
  const phone = document.getElementById("phone").value;
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone) || phone === "1234567890") {
    document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number";
    return false;
  } else {
    document.getElementById("phoneError").innerText = "";
    return true;
  }
}

// Function to validate password
function validatePassword() {
  const password = document.getElementById("password").value;
  const name = document.getElementById("fullName").value;

  if (password.length < 8 || password.toLowerCase() === "password" || password === name) {
    document.getElementById("passwordError").innerText = "Password is too weak";
    return false;
  } else {
    document.getElementById("passwordError").innerText = "";
    return true;
  }
}

// Function to validate confirm password
function validateConfirmPassword() {
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (password !== confirm) {
    document.getElementById("confirmError").innerText = "Passwords do not match";
    return false;
  } else {
    document.getElementById("confirmError").innerText = "";
    return true;
  }
}

// Master validation function
function validateForm() {
  return validateName() && validateEmail() && validatePhone() && validatePassword() && validateConfirmPassword();
}
