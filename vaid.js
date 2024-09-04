document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('rePassword').value;
    var errorDiv = document.getElementById('error');
    errorDiv.textContent = '';
    if (password !== rePassword) {
        errorDiv.textContent = 'Passwords do not match';
        return;
    }
    alert('Registration successful!');
