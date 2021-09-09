function showPassword() {
    let eye = document.getElementById("eye");
    let eyeSlash = document.getElementById("eye-slash");
    let fieldPassword = document.getElementById("field-password");

    if (eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';}
     else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }
};
