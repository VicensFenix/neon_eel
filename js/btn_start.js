// Espera que todo el documento esté cargado
window.addEventListener('DOMContentLoaded', () => {
    // Obtiene el botón por su ID
    const startButton = document.getElementById('starGame');

    // Agrega un evento de Click al botón
    startButton.addEventListener('click', () => {
        // Llamamos la función para rederijir a la página del juego
        redirectTo('html/game.html');
    });
})