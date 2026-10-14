
 // validate.js - handles form checks

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("regForm");

    form.addEventListener("submit", (event) => {
        let valid = true;

        // Full name check
        const fullname = document.getElementById("fullname");
        const fullnameError = document.getElementById("fullnameError");

        if (fullname.value.trim() === "") {
            fullnameError.textContent = "Full name is required.";
            valid = false;
        } else {
            fullnameError.textContent = "";
        }

        // Email check
        const email = document.getElementById("email");
        const emailError = document.getElementById("emailError");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/;

        if (!emailPattern.test(email.value)) {
            emailError.textContent = "Enter a valid email address.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        // Prevent submission if validation fails
        if (!valid) {
            event.preventDefault();
        }
    });
});

console.log("validate.js is running"); 
