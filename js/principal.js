let carrito = []; // Array para almacenar productos seleccionados

// Función para abrir/cerrar el menú del carrito
document.getElementById("carritoBtn").addEventListener("click", function () {
    const carritoMenu = document.getElementById("carritoMenu");
    carritoMenu.style.display = carritoMenu.style.display === "block" ? "none" : "block";
    actualizarCarrito();
});

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const carritoLista = document.getElementById("carritoLista");
    carritoLista.innerHTML = ""; // Limpiar la lista de productos del carrito

    if (carrito.length === 0) {
        carritoLista.innerHTML = "<li>El carrito está vacío</li>";
        document.getElementById("carritoBtn").innerText = "Carrito (0)";
    } else {
        carrito.forEach((producto, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${producto} <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
            carritoLista.appendChild(li);
        });
        document.getElementById("carritoBtn").innerText = `Carrito (${carrito.length})`;
    }
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para vaciar el carrito
document.getElementById("vaciarCarrito").addEventListener("click", function () {
    carrito = [];
    actualizarCarrito();
});

// Función para confirmar la compra
document.getElementById("confirmarCompra").addEventListener("click", function () {
    if (carrito.length === 0) {
        alert("El carrito está vacío, no se puede realizar la compra.");
    } else {
        alert("Compra confirmada. ¡Gracias por tu compra!");
        carrito = []; // Vaciar el carrito después de la compra
        actualizarCarrito();
    }
});
