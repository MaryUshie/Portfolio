const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

function validateForm(name, email, phone, message) {
  if (name === "" || email === "" || phone === "" || message === "") {
    return "All fields are required.";
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  }
  const digitsOnly = /^[0-9]+$/;
  if (!digitsOnly.test(phone)) {
    return "Phone number must contain digits only.";
  }
  return "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  const error = validateForm(name, email, phone, message);

  if (error !== "") {
    feedback.textContent = error;
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Thank you, " + name + "! Your message has been sent.";
    feedback.style.color = "green";
    form.reset();
  }
});