function checkPasswordStrength(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (hasUppercase && hasLowercase && hasNumber) {
        return 'Strong Password';
    } else if (hasLowercase && hasNumber) {
        return 'Not Strong Enough';
    } else {
        return 'Weak Password';
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    const strength = checkPasswordStrength(password);

    alert('Password Strength: ' + strength);
}

const signUpForm = document.querySelector('.sign-up-form');
signUpForm.addEventListener('submit', handleFormSubmit);
