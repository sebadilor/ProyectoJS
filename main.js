function mostrarAlert(mensaje) { 
    alert(mensaje); 
} 
 
function preguntarNombre() { 
    const nombre = prompt("Por favor, ingrese su nombre:"); 
    mostrarAlert(`Bienvenido a nuestro ecommerce, ${nombre}.`); 
    return nombre; 
} 
 
function preguntarCategoria() { 
    let categoria;
    let opcion = "";
    
    while (opcion !== "1" && opcion !== "2") { 
        opcion = prompt("¿Qué desea comprar? Elija la opción 1 si quiere remeras, opción 2 si quiere pantalones:"); 
        
        if (opcion === "1") {
            categoria = "remeras";
        } else if (opcion === "2") {
            categoria = "pantalones";
        }
    } 

    return categoria; 
} 
 
function confirmarCompra(categoria) { 
    let producto = ""; 
    let precio = 0; 
 
    if (categoria === "remeras") { 
        producto = "remera"; 
        precio = 900;
    } else if (categoria === "pantalones") { 
        producto = "pantalón"; 
        precio = 1200;
    } 
 
    const confirmacion = confirm(`Usted eligió ${producto}. Su precio es de $${precio}. ¿Desea confirmar la compra del artículo?`); 
 
    if (confirmacion) { 
        const direccion = prompt("Ingrese su dirección para realizar el envío del pedido:"); 
        mostrarAlert(`Su artículo será enviado a: ${direccion}.`); 
        mostrarAlert("Muchas gracias por su compra."); 
    } else { 
        mostrarAlert("Muchas gracias por su visita."); 
    } 
} 
 
function main() { 
    const nombre = preguntarNombre(); 
    const categoria = preguntarCategoria(); 
    confirmarCompra(categoria); 
} 
 
main();