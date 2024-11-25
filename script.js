let carrito = [];

function agregarCarrito(idProducto, precioProducto) {
    const cantidad = document.getElementById(`cantidad${idProducto}`).value;
    const producto = {
        id: idProducto,
        precio: precioProducto,
        cantidad: parseInt(cantidad)
    };

    // Verifica si el producto ya está en el carrito
    const existente = carrito.find(item => item.id === idProducto);
    if (existente) {
        existente.cantidad += producto.cantidad;
    } else {
        carrito.push(producto);
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = ''; // Limpiar lista

    let total = 0;
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Producto ${item.id} - Cantidad: ${item.cantidad} - Subtotal: $${item.precio * item.cantidad}`;
        listaCarrito.appendChild(li);

        total += item.precio * item.cantidad;
    });

    document.getElementById('total').textContent = total;
}

document.getElementById('formularioCompra').addEventListener('submit', function (event) {
    event.preventDefault();

    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    if (carrito.length === 0) {
        alert('Tu carrito está vacío.');
        return;
    }

    alert(`Compra confirmada. Teléfono: ${telefono}, Email: ${email}, Total: $${document.getElementById('total').textContent}`);
    carrito = [];
    actualizarCarrito();
});
