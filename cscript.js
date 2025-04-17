document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseMessage = document.getElementById('responseMessage');

    if (name && email && message) {
        responseMessage.textContent = 'Thank you for contacting us, ' + name + '! We will get back to you soon.';
        responseMessage.className = '';
        responseMessage.classList.add('success');
    } else {
        responseMessage.textContent = 'Please fill out all fields.';
        responseMessage.className = '';
        responseMessage.classList.add('error');
    }
});
