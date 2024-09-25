let carrito = [];
let total = 0;
let opcion = 0;

function camisa() {
    carrito.push({ nombre: "Camisa", precio: 300 });//se añade camisa al array que es un objeto con su nombre y precio
    total += 300;//se añade el precio de la camisa a total
    console.log("Camisa agregada al carrito. Precio: $300");
}

function pantalon() {
    carrito.push({ nombre: "Pantalón", precio: 500 });//se añade pantalos al array que es un objeto con su nombre y precio
    total += 500;//se añade el precio del pantalon a total
    console.log("Pantalón agregado al carrito. Precio: $500");
}

function zapatos() {
    carrito.push({ nombre: "Zapatos", precio: 800 });//se añade zapato al array que es un objeto con su nombre y precio
    total += 800;//se añade el precio de los zapatos a total
    console.log("Zapatos agregados al carrito. Precio: $800");
}

function sombrero() {
    carrito.push({ nombre: "Sombrero", precio: 200 });//se añade sombrero al array que es un objeto con su nombre y precio
    total += 200;//se añade el precio del sombrero a total
    console.log("Sombrero agregado al carrito. Precio: $200");
}

function verCarrito() {
    console.log("\nCarrito de compras:");
    if (carrito.length === 0) {//si la longitud del array carrito esta vacia nos manda tu carrito esta vacío
        console.log("Tu carrito está vacío.");
    } else {
        carrito.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nombre} - $${item.precio}`);//con ayuda de un forEach se imprime el array del carrito
        });
        console.log(`Total: $${total}`);//se imprime en la consola el total
    }
}

function mostrarMenu() {//se muesta el menu en un prompt
    return parseInt(prompt(`
        Tienda Virtual
        1. Camisa - $300
        2. Pantalón - $500
        3. Zapatos - $800
        4. Sombrero - $200
        5. Ver carrito
        6. Salir
        Elige una opción:
    `));
}

while (opcion !== 6) {//se sigue ejecutando mientras la opcion no sea 6 de salir
    opcion = mostrarMenu();

    switch (opcion) {
        case 1:
            camisa();
            break;
        case 2:
            pantalon();
            break;
        case 3:
            zapatos();
            break;
        case 4:
            sombrero();
            break;
        case 5:
            verCarrito();
            break;
        case 6:
            console.log("Gracias por tu compra.");
            break;
        default:
            console.log("Ingresa una opcion valida");
    }
}
