// Inicializa variables globales
let cantidad1 = cantidad2 = cantidad3 = total1 = total2 = total3 = 0;
const PRECIO1 = 11000, PRECIO2 = 12000, PRECIO3 = 13000;
let producto = " ", continuar = true;

function procesaCompra(producto, cantidadProducto) {
    switch (producto) {
        case "Asado":
            cantidad1 = cantidad1 + cantidadProducto;
            total1 = PRECIO1 * cantidad1;
            break;
        case "Bife":
            cantidad2 = cantidad2 + cantidadProducto;
            total2 = PRECIO2 * cantidad2;
            break;
        case "Cuadril":
            cantidad3 = cantidad3 + cantidadProducto;
            total3 = PRECIO3 * cantidad3;
            break;
    }
}

function muestraCarro() {
    alert("Actualmente su carro de compra contiene: " + cantidad1 + " kg de Asado, " + cantidad2 + " kg de Bife y " + cantidad3 + " kg de Cuadril")
}

function ingresaCantidad() {
    let reintentar = true
    do {
        const cantidadProducto = parseFloat(prompt("Está agregando al Carro " + producto + "; Por favor indique la cantidad en kilos que desea comprar"))
        if (isNaN(cantidadProducto)) {
            alert("Por favor ingrese un número");
        } else {
            procesaCompra(producto, cantidadProducto);
            reintentar = false
        }
    } while (reintentar)
}

// Solicita al usuario que ingrese el producto y la cantidad que desea

do {
    producto = prompt("Indique la letra del producto que desea agregar al carro (A) Asado, (B) Bife, (C) Cuadril; (S) para Salir").toUpperCase();
    switch (producto) {
        case "A":
            producto = "Asado";
            ingresaCantidad()
            break;
        case "B":
            producto = "Bife";
            ingresaCantidad()
            break;
        case "C":
            producto = "Cuadril"
            ingresaCantidad()
            break;
        case "S":
            continuar = false
            break;
        default:
            alert("La opción seleccionada no es válida, por favor intente nuevamente.");
            break;
    }
} while (continuar)

//Muestra el contenido del carro y finaliza

alert("Gracias por su compra " + "Su carro contiene: " + cantidad1 + " kg de Asado, el subtotal es: $" + total1 + " " + cantidad2 + " kg de Bife el subtotal es $" + total2 + " y " + cantidad3 + " kg de Cuadril el subtotal es $" + total3 + " El total a pagar es $" + ((total1) + (total2) + (total3))) 