function cambiarFuente() {
    const fuenteSeleccionada = document.getElementById("fuentes").value;
    const body = document.body;

    if (fuenteSeleccionada) {
        body.style.fontFamily = fuenteSeleccionada;
    } else {
        body.style.fontFamily = 'Arial, sans-serif';
    }
}

function aplicarFuentePersonalizada() {
    const fuentePersonalizada = document.getElementById("fuentePersonalizada").value;
    const body = document.body;

    if (fuentePersonalizada) {
        body.style.fontFamily = fuentePersonalizada;
    }
}
