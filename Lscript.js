function togglePassword() {
    const passwordField = document.getElementById('password');
    const showHideText = document.querySelector('.show-hide');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showHideText.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        showHideText.textContent = 'Show';
    }
}

function validateEmailPhone(emailPhone) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/; // Assuming phone number is 10 digits
    return emailPattern.test(emailPhone) || phonePattern.test(emailPhone);
}

function validateForm() {
    const emailPhone = document.getElementById('emailPhone').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    if (emailPhone === "" || password === "") {
        errorDiv.textContent = "All fields must be filled out";
        return false;
    }
    if (!validateEmailPhone(emailPhone)) {
        errorDiv.textContent = "Invalid email or phone number";
        return false;
    }

    // If validation passes
    errorDiv.textContent = ""; // Clear any previous error messages
    alert("Login successful!");
    return true;
}

// Event listener to prevent form submission for demonstration
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        // Show successful login pop-up message
        alert("Login successful!");
    }
});


           