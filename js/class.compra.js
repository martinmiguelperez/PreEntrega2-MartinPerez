class CompraVehiculo {
    constructor(CARRITO_MOTOS) {
        this.CARRITO_MOTOS = CARRITO_MOTOS
    }
    obtenerSubTotal() {
        if (CARRITO_MOTOS.length > 0) {
            return this.CARRITO_MOTOS.reduce((total, vehiculo)=> total + vehiculo.precio, 0).toFixed(2)
        } else {
            return 'Error inesperado.'
        }
    }
    confirmarCompra() {
        if (this.obtenerSubTotal() !== 'Error inesperado') {
            return `El pago fue confirmado! \n Muchas gracias, lo esperamos nuevamente.!`
        } else {
            return `No se pudo confirmar el pago, sepa disculparnos.`
        }
    }
}