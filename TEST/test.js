function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const regex = /^[AIMLC]*$/;

    if (!regex.test(username)) {
        alert("Username can only contain the characters A, I, M, L, C.");
        return false;
    }

    if (!regex.test(password)) {
        alert("Password can only contain the characters A, I, M, L, C.");
        return false;
    }
    alert("Login successful!");
}