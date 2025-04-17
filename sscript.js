function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var password = document.getElementById('password').value;
    var errorElement = document.getElementById('error');

    if (name == "" || email == "" || phone == "" || gender == "" || password == "") {
        errorElement.textContent = "All fields are required!";
        return false;
    }

    errorElement.textContent = "";
    alert("Form Submitted Successfully!");
    return true;
}
