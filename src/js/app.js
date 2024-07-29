
// Ojo Contraseña
function togglePassword(id) {
    const input = document.getElementById(id);
    const icon = document.querySelector(`#${id}-toggle i`);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}