/* VARIABLES */
let menuPrincipal = 0;
let subMenu = 0;

let montoTotal = 0.0;
let cantidadDeCuotasASacar = 0;
let montoPorCuota = 0.0;

/* FUNCIONES */

function calcularValorPorCuota(montoTotal, cantidadDeCuotasASacar) {
    return montoTotal / cantidadDeCuotasASacar
}

function calcularImpuestoYDescuento(valorDelProducto, impuesto, descuento) {
    let valorConImpuesto = 0;
    let valorConDescuento = 0;

    valorConImpuesto = (valorDelProducto * impuesto) / 100
    valorDelProducto += valorConImpuesto;

    valorConDescuento = (valorDelProducto * descuento) / 100
    valorDelProducto -= valorConDescuento;

    return valorDelProducto;
}

/* CLASES */

/* ---------------------------------------------------- */

/* MENÚ PRINCIPAL */
do {
    menuPrincipal = parseInt(prompt("¡PRE - ENTREGA 4 DE JavaScript! \nPulsa: \n[1] Calcular costo total de productos y / o servicios seleccionados por el usuario. \n[2] Calcular pagos en cuotas sobre un monto determinado. \n[3] Calcular valor final de un producto seleccionado en función de impuestos y descuentos. \n[4] Calcular tiempo de espera promedio en relación con la cantidad de turnos registrados. \n[5] Para SALIR."))

    switch (menuPrincipal) {

        /* ------- */
        case 1:
            montoTotal = 0.0;
            let serviciosAdquiridos = 0;

            do {
                subMenu = parseInt(prompt("Productos y/o servicios disponibles: \n (1) PlayStation 5 {700.0USD} \n (2) Iphone 15 {1500.0USD} \n (3) Netflix xMes {100.50USD} \n (4) Disney+ xMes {150.70USD} \n (5) CANCELAR. \n Servicios o Productos adquiridos: " + serviciosAdquiridos + ". \n Precio Total: " + montoTotal + " USD."))

                if (subMenu === 1) {
                    serviciosAdquiridos++;
                    montoTotal += 700.0;
                }

                if (subMenu === 2) {
                    serviciosAdquiridos++;
                    montoTotal += 1500.0;
                }

                if (subMenu === 3) {
                    serviciosAdquiridos++;
                    montoTotal += 100.50;
                }

                if (subMenu === 4) {
                    serviciosAdquiridos++;
                    montoTotal += 150.70;
                }

            } while (subMenu !== 5);
            break;
        /* ------- */

        case 2:
            montoTotal = parseInt(prompt("Ingrese el monto total: "));
            cantidadDeCuotasASacar = parseInt(prompt("Ingrese la cantidad de cuotas a sacar: "));

            montoPorCuota = calcularValorPorCuota(montoTotal, cantidadDeCuotasASacar);
            alert("Usted debe pagar: " + montoPorCuota + "$ por cuota.");

            break;
        /* ------- */

        case 3:
            let valorDelProducto = 0;
            let impuesto = 0;
            let descuento = 0;
            let valorFinalDelProducto = 0;

            valorDelProducto = parseInt(prompt("Ingrese el valor del producto final: "));
            impuesto = parseInt(prompt("Ingrese el porcentaje del impuesto: "));
            descuento = parseInt(prompt("Ingrese el porcentaje del descuento: "));

            valorFinalDelProducto = calcularImpuestoYDescuento(valorDelProducto, impuesto, descuento);
            alert("Valor inicial: " + valorDelProducto + "$. \n Impuesto aplicado: " + impuesto + "%. \n Descuento aplicado: " + descuento + "%. \n Valor final: " + valorFinalDelProducto + "$.");

            break;
        /* ------- */

        case 4:
            let cantidadDeTurnos = 0;
            let tiempoPromedioDeEspera = 0;
            let timepoDeEsperaEnTotal = 0;

            cantidadDeTurnos = parseInt(prompt("Ingrese la cantidad de turnos: "));

            for (let index = 0; index < cantidadDeTurnos; index++) {
                tiempoPromedioDeEspera = parseInt(prompt("Ingrese el tiempo estimado para el turno: Nº" + (index + 1) + "."));
                timepoDeEsperaEnTotal += tiempoPromedioDeEspera;
            }

            alert("Cantidad de Turnos en total: " + cantidadDeTurnos + ". \n Tiempo de espera promedio: " + timepoDeEsperaEnTotal + ".")
            break;
        /* ------- */

        default:
            break;
    }

} while (menuPrincipal !== 5);



