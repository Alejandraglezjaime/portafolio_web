function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    const hamburgIcon = document.querySelector('.hamburg');
    
    dropdown.style.transform = "translateY(0)";
    hamburgIcon.style.display = "none"; // Esconde la hamburguesa al abrir
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    const hamburgIcon = document.querySelector('.hamburg');
    
    dropdown.style.transform = "translateY(-100%)";
    hamburgIcon.style.display = "block"; // Muestra la hamburguesa al cerrar
}