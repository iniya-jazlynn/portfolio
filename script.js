// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let status = document.getElementById("formStatus");

  if(name === "" || email === "" || message === "") {
    status.textContent = "❌ Please fill in all fields.";
    status.style.color = "red";
  } else {
    status.textContent = "✅ Message sent successfully!";
    status.style.color = "green";
    this.reset();
  }
});
