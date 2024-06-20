// Basic form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Here you can add further validation or submit the form data
        // For example, sending the form data to a server via AJAX
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Optional: Reset the form after submission
        form.reset();
    });
});
