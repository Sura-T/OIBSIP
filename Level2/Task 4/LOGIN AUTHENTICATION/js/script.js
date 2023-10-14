var users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
];

var loginContainer = document.getElementById('login-container');
var forgotPasswordContainer = document.getElementById('forgot-password-container');
var registerContainer = document.getElementById('register-container');
var securedContent = document.getElementById('secured-content');

var loginBtn = document.getElementById('login-btn');
var forgotPasswordBtn = document.getElementById('forgot-password-btn');
var registerBtn = document.getElementById('register-btn');
var logoutBtn = document.getElementById('logout-btn');

var forgotPasswordLink = document.getElementById('forgot-password-link');
var registerLink = document.getElementById('register-link');
var backToLoginLink = document.getElementById('back-to-login-link');
var backToLoginLink2 = document.getElementById('back-to-login-link-2');

var loginError = document.getElementById('login-error');
var forgotPasswordMessage = document.getElementById('forgot-password-message');
var registerSuccessMessage = document.getElementById('register-success-message');

function showLoginContainer() {
    loginContainer.style.display = 'block';
    forgotPasswordContainer.style.display = 'none';
    registerContainer.style.display = 'none';
    securedContent.style.display = 'none';
    resetFormFields();
    hideErrorMessages();
}

function showForgotPasswordContainer() {
    loginContainer.style.display = 'none';
    forgotPasswordContainer.style.display = 'block';
    registerContainer.style.display = 'none';
    securedContent.style.display = 'none';
    resetFormFields();
    hideErrorMessages();
}

function showRegisterContainer() {
    loginContainer.style.display = 'none';
    forgotPasswordContainer.style.display = 'none';
    registerContainer.style.display = 'block';
    securedContent.style.display = 'none';
    resetFormFields();
    hideErrorMessages();
}

function resetFormFields() {
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('forgot-password-username').value = '';
    document.getElementById('register-username').value = '';
    document.getElementById('register-password').value = '';
}

function hideErrorMessages() {
    loginError.style.display = 'none';
    forgotPasswordMessage.style.display = 'none';
    registerSuccessMessage.style.display = 'none';
}

function handleLogin() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    var user = users.find(function (user) {
        return user.username === username && user.password === password;
// ```javascript
    });

    if (user) {
        loginContainer.style.display = 'none';
        securedContent.style.display = 'block';
    } else {
        loginError.style.display = 'block';
    }
}

function handleForgotPassword() {
    var username = document.getElementById('forgot-password-username').value;

    var user = users.find(function (user) {
        return user.username === username;
    });

    if (user) {
        forgotPasswordContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        alert('Password reset link sent to your email.');
    } else {
        forgotPasswordMessage.style.display = 'block';
    }
}

function handleRegister() {
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;

    var newUser = { username: username, password: password };
    users.push(newUser);

    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
    registerSuccessMessage.style.display = 'block';
}

function handleLogout() {
    securedContent.style.display = 'none';
    loginContainer.style.display = 'block';
}

loginBtn.addEventListener('click', handleLogin);
forgotPasswordBtn.addEventListener('click', handleForgotPassword);
registerBtn.addEventListener('click', handleRegister);
logoutBtn.addEventListener('click', handleLogout);
forgotPasswordLink.addEventListener('click', showForgotPasswordContainer);
registerLink.addEventListener('click', showRegisterContainer);
backToLoginLink.addEventListener('click', showLoginContainer);
backToLoginLink2.addEventListener('click', showLoginContainer);

showLoginContainer(); // Show the login container by default