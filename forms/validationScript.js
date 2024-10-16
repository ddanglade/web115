const inputField = document.getElementById('inputField');
const form = document.getElementById('myForm');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateInput(inputField.value);
});

function validateInput(value) {
    const regex = /^[a-zA-Z0-9]+$/;
    errorMessage.textContent = '';
    successMessage.textContent = '';

    if (!regex.test(value)) {
        errorMessage.textContent = 'Input must be alphanumeric (letters and numbers only).';
    } else {
        successMessage.textContent = 'Success! Your input is valid.';
    }
}
