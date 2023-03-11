const CARRITO_MOTOS = []
const INTERES = 1.10
const DESCUENTO = 0.05

const VEHICULOS = [
    { id: 1, nombre: 'Peugeot Tweet', cilindrada: '125cc', precio: 1_200 },
    { id: 2, nombre: 'Askoll eS', cilindrada: '50cc', precio: 750 },
    { id: 3, nombre: 'Yamaha Tricity', cilindrada: '125cc', precio: 1_850 },
    { id: 4, nombre: 'Yamaha XMAX', cilindrada: '300cc', precio: 2_600 },
]


const MENSAJE_LICENCIA_A = "¿Posee licencia de conducir tipo 'A'? \n" +
    "Oprima 'ACEPTAR' para continuar con la compra."

const MENSAJE_INICIAL_COMPRA = "Ingrese el código la motocicleta que deseas comprar:"

const MENSAJE_FORMA_PAGO = "Elija la forma de pago. \n" +
    "\n" +
    "1. Contado. \n" +
    "2. 5 Cuotas. (SIN INTERES)\n" +
    "3. 12 Cuotas. (7% DE INTERES)\n" +
    "\n" +
    "Ingrese el Nro. de la financiacion que desea."

