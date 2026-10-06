// ===============================
// GAMEZONE - SCRIPT PRINCIPAL
// ===============================

// Mensaje de bienvenida
function mostrarMensaje() {
    alert("🎮 ¡Bienvenido a GameZone! Explora, aprende y diviértete.");
}

// Iniciar juego
function iniciarJuego() {
    alert("⚡ ¡El juego ha comenzado!");
}

// Efecto cuando se carga la página
document.addEventListener("DOMContentLoaded", function () {

    console.log("GameZone cargado correctamente.");

    // Animación sencilla para las tarjetas
    const tarjetas = document.querySelectorAll(".juego-card");

    tarjetas.forEach(function (tarjeta) {
        tarjeta.addEventListener("mouseenter", function () {
            tarjeta.style.transform = "translateY(-8px)";
        });

        tarjeta.addEventListener("mouseleave", function () {
            tarjeta.style.transform = "translateY(0)";
        });
    });

});
function mostrarMensaje() {
    alert("🎮 ¡Bienvenido a GameZone!");
}

function iniciarJuego() {
    alert("⚡ ¡El juego ha comenzado!");
}