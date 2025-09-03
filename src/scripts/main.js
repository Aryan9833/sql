// filepath: signup-form-project/src/scripts/main.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (validateForm(name, email, password)) {
            console.log('Form submitted successfully!');
            // Here you can add code to send the data to a server or perform other actions
        }
    });

    function validateForm(name, email, password) {
        if (!name || !email || !password) {
            alert('All fields are required.');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});