
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


// fetch('http://3.149.242.43:6969/client/register', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         first_name: "Jaime",
//         last_name: "Dennis",
//         email: "jaime@gmail.com",
//         username: "jaime",
//         password: "123",
//         country_code: "52",
//         phone_number: "123456789",
//         state: "Sinaloa",
//         city: "Mazatlán",
//         street: "Calle Prin",
//         house_number: "24000",
//         neighborhood: "Monos",
//         postal_code: "234567"
//     })
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Manejar la respuesta de la API
//         console.log(data);
//     })
//     .catch(error => {
//         // Manejar errores de la solicitud
//         console.error('Error:', error);
//     });


// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Handle the API response
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle request errors
//         console.error('Error:', error);
//     });