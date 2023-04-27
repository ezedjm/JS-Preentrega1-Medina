/*
ingresar un valor que a futuro vendra de un boton de compra de una tienda virtual
es cliente ?
si es cliente que ingrese nombre y clave
si no dar opcion de continuar como invitado o salir
si es invitado ingresar nombre 
mostrar total 
dar opciones de pago hasta 3 cuotas sin interes
si elige cuotas mostrar montos mensuales
()
*/

let montoTotal = prompt('Ingrese un valor numerico en concepto de MONTO a abonar por compras en tienda online: \nEN EL PROYECTO VA A PASAR POR PARAMETRO'); //entra por parametro de un carrito de compras

while (montoTotal === "") {
    alert("Ingrese un valor de monto total cualquiera");
    montoTotal = prompt("Ingrese un valor numerico en concepto de MONTO a abonar por compras en tienda online: \nEN EL PROYECTO VA A PASAR POR PARAMETRO ");
}

function TotalCuotificado(monto, Cuota) {
    let resultado = monto / Cuota;
    return resultado;
}

let clienteRegistrado = prompt('Es usted cliente?: (Si/No)');
if (clienteRegistrado.toLowerCase() === "si") { //si es cliente
    let nombreUsuario = prompt('Ingrese su nombre de usuario:');
    if (nombreUsuario === "") {
        alert('USUARIO INEXISTENTE o VACIO.');
        location.reload();
    }
    else {
        let claveUsuario = prompt('Ingrese su clave de usuario: (Solo numeros)');
        if (claveUsuario === "") {
            alert('LA CLAVE NO DEBE SER VACIA.');
            location.reload();
        }
        else {
            alert('Bienvenido ' + nombreUsuario + '\nUd esta por comprar los productos seleccionados, por un monto de $' + montoTotal);
            let MedioPago = prompt('Como desea abonar?: \n 1-Tarjeta \n 2-Transferencia');

            if (MedioPago == "1") {
                let Cuotas = prompt('Desea abonar en 1 o 3 cuotas?');
                if (Cuotas == "1") {
                    alert('Usted abonara $' + montoTotal + ' en ' + Cuotas + ' cuota/s');
                }
                else if (Cuotas == "3") {
                    alert('Usted abonara $' + montoTotal + ' en ' + Cuotas + ' cuota/s de $' + TotalCuotificado(montoTotal, Cuotas));
                }
                else {
                    alert(Cuotas + ' no es un numero de cuotas disponible por el momento.');
                }
            }
            else if (MedioPago === "2") {
                alert('Usted abonara $' + montoTotal + ' mediante Transferencia en 1 pago.');
            } else {
            }
        }
    }
}
else {   // si no es cliente
    let clienteInvitado = prompt('Desea continuar como invitado?: (Si/No) ');
    if (clienteInvitado.toLowerCase() === "si") {
        alert('Ud ingreso como Invitado');
        alert('Ud esta por comprar los productos seleccionados, por un monto de $' + montoTotal);
            let MedioPago = prompt('Como desea abonar?: \n 1-Tarjeta \n 2-Transferencia');

            if (MedioPago == "1") {
                let Cuotas = prompt('Desea abonar en 1 o 3 cuotas?');
                if (Cuotas == "1") {
                    alert('Usted abonara $' + montoTotal + ' en ' + Cuotas + ' cuota/s');
                }
                else if (Cuotas == "3") {
                    alert('Usted abonara $' + montoTotal + ' en ' + Cuotas + ' cuota/s de $' + TotalCuotificado(montoTotal, Cuotas));
                }
                else {
                    alert(Cuotas + ' no es un numero de cuotas disponible por el momento.');
                }
            }
            else if (MedioPago === "2") {
                alert('Usted abonara $' + montoTotal + ' mediante Transferencia en 1 pago.');
            } else {
            }

    }
    else {
        alert('Hasta luego');
        location.reload();
    }
}
