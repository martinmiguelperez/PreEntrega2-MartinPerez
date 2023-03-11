function inicioDeProceso() {
    let LicenciaTipoA = prompt(MENSAJE_LICENCIA_A).toLocaleLowerCase().trim()

    let seleccionLicencia = ((LicenciaTipoA !== "si"))
    if (seleccionLicencia) {
        console.error("¡Debes tener licencia de conducir tipo 'A'! No puede continuar ")
        return
    } else {
        iniciarComprar()
    }
}

function buscarVehiculo(id) {
    let resultado = VEHICULOS.find(vehiculo => vehiculo.id === id)
    return resultado
}

function iniciarComprar() {

    let codigoSeleccionado = parseInt(prompt(MENSAJE_INICIAL_COMPRA))
    if ((codigoSeleccionado !== 1) && (codigoSeleccionado !== 2) && (codigoSeleccionado !== 3) && (codigoSeleccionado !== 4)) {
        alert("Ingresa una opción válida, por favor.")
        return
    }

    let seleccionado = buscarVehiculo(codigoSeleccionado)
    let mensajeProductoSeleccionado = `Usted selecciono:  \n ${seleccionado.nombre} | ${seleccionado.cilindrada}. \n Precio: ${seleccionado.precio} €.`
    alert(mensajeProductoSeleccionado)

    let vehiculoSeleccionado = buscarVehiculo(codigoSeleccionado)
    CARRITO_MOTOS.push(vehiculoSeleccionado)


    let respuestaNuevaSeleccion = confirm("¿Deseas seguir comprando?")
    if (respuestaNuevaSeleccion) {
        iniciarComprar()
    } else {
        finalizarCompra()
    }
}

function verCarrito() {
    if (CARRITO_MOTOS.length > 0) {
        console.table(CARRITO_MOTOS)
    } else {
        alert("Ups ... El carrito está vacío!")
    }
}

function finalizarCompra() {
    if (CARRITO_MOTOS.length === 0) {
        alert("El carrito ya está vacío!")
        return
    }

    const ADQUIRIR = new CompraVehiculo(CARRITO_MOTOS)
    alert(`El valor subtotal de su carrito es de ${ADQUIRIR.obtenerSubTotal()}  €`)


    let tipoDePago = parseInt(prompt(MENSAJE_FORMA_PAGO))

    let seleccionPago = ((tipoDePago !== 1) && (tipoDePago !== 2) && (tipoDePago !== 3))

    if (seleccionPago) {
        alert("Ingresa una opción válida, por favor.")
        return
    }


    switch (tipoDePago) {
        case 1:
            totalContado = ADQUIRIR.obtenerSubTotal() - (ADQUIRIR.obtenerSubTotal() * DESCUENTO)
            alert(" Pagar un TOTAL al contado de: € " + totalContado.toFixed(2) + "\n" +
                "Por pago al contado tiene DESCUENTO de: € " + (ADQUIRIR.obtenerSubTotal() * DESCUENTO).toFixed(2))
            break;

        case 2:
            totalCincoCuotas = ADQUIRIR.obtenerSubTotal() / 5
            alert("Pagar 5 cuotas de: € " + totalCincoCuotas.toFixed(2) + "\n" +
                "Hacen un TOTAL de: € " + (totalCincoCuotas * 5).toFixed(2))
            break;

        case 3:
            totalDoceCuotas = (ADQUIRIR.obtenerSubTotal() / 12) * INTERES
            alert("Pagar 12 cuotas de: € " + totalDoceCuotas.toFixed(2) + "\n" +
                "Hacen un TOTAL de: € " + (totalDoceCuotas * 12).toFixed(2))
            break;
        default:
            console.error("Ingresa una opción válida, por favor.")
            break
    }

    let respuestaPago = confirm("Quiere confirmar su pago?")
    if (respuestaPago) {
        alert(ADQUIRIR.confirmarCompra())
        CARRITO_MOTOS.length = 0
    }
    console.clear()
}
