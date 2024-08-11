
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


document.addEventListener('DOMContentLoaded', function () {
    // Obtén la URL actual
    var currentUrl = window.location.pathname.split("/").pop();

    // Obtén todos los enlaces
    var links = document.querySelectorAll('.links a');

    // Recorre los enlaces para agregar la clase activa al correspondiente
    links.forEach(function (link) {
        var linkUrl = link.getAttribute('href');
        if (linkUrl === currentUrl) {
            link.classList.add('active-link');
        }
    });
});

