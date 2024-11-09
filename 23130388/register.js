function validatePasswords() {
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}