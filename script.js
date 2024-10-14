function cambiarFuente() {
    const fuenteSeleccionada = document.getElementById("fuentes").value;
    const body = document.body;
    const cssCodeArea = document.getElementById("cssCode");

    if (fuenteSeleccionada) {
        body.style.fontFamily = fuenteSeleccionada;
        cssCodeArea.value = `body { font-family: ${fuenteSeleccionada}; }`;
    } else {
        body.style.fontFamily = 'Arial, sans-serif';
        cssCodeArea.value = `body { font-family: 'Arial', sans-serif; }`;
    }
}

function aplicarFuentePersonalizada() {
    const fuentePersonalizada = document.getElementById("fuentePersonalizada").value;
    const body = document.body;
    const cssCodeArea = document.getElementById("cssCode");

    if (fuentePersonalizada) {
        body.style.fontFamily = fuentePersonalizada;
        cssCodeArea.value = `body { font-family: ${fuentePersonalizada}; }`;
    }
}

function copiarCSS() {
    const cssCodeArea = document.getElementById("cssCode");
    cssCodeArea.select();
    document.execCommand("copy");
    alert("Código CSS copiado al portapapeles!");
}
