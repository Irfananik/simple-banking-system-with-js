//login submit button
document.getElementById('login-btn').addEventListener('click', function() {
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value


    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value


    // condition
    if (userEmail == 'anik10@gmail.com' && userPassword == 'anik') {
        window.location.href = 'banking.html'
    } else {
        alert('Please enter valid email or password')
    }
})