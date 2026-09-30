function calcular() {

    let lecturaAnterior = parseFloat(
        document.getElementById("lecturaAnterior").value
    );

    let lecturaActual = parseFloat(
        document.getElementById("lecturaActual").value
    );

    let precioKwh = parseFloat(
        document.getElementById("precioKwh").value
    );

    let cargoFijo = parseFloat(
        document.getElementById("cargoFijo").value
    );

    if (isNaN(lecturaAnterior) || isNaN(lecturaActual)) {

        alert("Ingrese las lecturas del medidor.");

        return;
    }

    if (lecturaActual < lecturaAnterior) {

        alert("La lectura actual no puede ser menor que la lectura anterior.");

        return;
    }

    if (isNaN(precioKwh) || precioKwh <= 0) {

        alert("Ingrese un precio por kWh válido.");

        return;
    }

    if (isNaN(cargoFijo) || cargoFijo < 0) {

        alert("Ingrese un cargo fijo válido.");

        return;
    }

    let consumo = lecturaActual - lecturaAnterior;

    let subtotal = consumo * precioKwh;

    let igv = subtotal * 0.18;

    let total = subtotal + igv + cargoFijo;

    document.getElementById("consumo").textContent =
        "Consumo: " + consumo.toFixed(2) + " kWh";

    document.getElementById("subtotal").textContent =
        "Subtotal: S/ " + subtotal.toFixed(2);

    document.getElementById("igv").textContent =
        "IGV (18%): S/ " + igv.toFixed(2);

    document.getElementById("total").textContent =
        "TOTAL A PAGAR: S/ " + total.toFixed(2);
}


function limpiar() {

    document.getElementById("lecturaAnterior").value = "";

    document.getElementById("lecturaActual").value = "";

    document.getElementById("precioKwh").value = "0.6445";

    document.getElementById("cargoFijo").value = "5.00";

    document.getElementById("consumo").textContent =
        "Consumo: -";

    document.getElementById("subtotal").textContent =
        "Subtotal: -";

    document.getElementById("igv").textContent =
        "IGV (18%): -";

    document.getElementById("total").textContent =
        "TOTAL A PAGAR: -";
}