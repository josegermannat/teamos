document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("magicButton");
    
    button.addEventListener("click", () => {
        let zIndex = 1; // Iniciar el índice z

        for (let i = 0; i < 300; i++) {
            const contenedor = document.createElement("div");
            contenedor.className = "contenedor";
            contenedor.style.zIndex = zIndex++; // Incrementar el índice z

            const elemento = document.createElement("div");
            elemento.className = "elemento";
            elemento.textContent = "Te amo";

            contenedor.appendChild(elemento);

            // Generar posiciones aleatorias para el contenedor
            const posX = Math.random() * (window.innerWidth - 150); // Ajusta 150 al ancho del contenedor
            const posY = Math.random() * (window.innerHeight - 80); // Ajusta 80 a la altura del contenedor

            // Aplicar posiciones aleatorias al contenedor
            contenedor.style.left = `${posX}px`;
            contenedor.style.top = `${posY}px`;

            // Añadir el contenedor al body
            document.body.appendChild(contenedor);
        }
        
        // Ocultar el botón
        button.style.display = 'none';
    });
});
