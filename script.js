function changeFont() {
    const selectedFont = document.getElementById("fonts").value;
    const body = document.body;
    const cssCodeArea = document.getElementById("cssCode");

    if (selectedFont) {
        body.style.fontFamily = selectedFont;
        cssCodeArea.value = `body { font-family: ${selectedFont}; }`;
    } else {
        body.style.fontFamily = 'Arial, sans-serif';
        cssCodeArea.value = `body { font-family: 'Arial', sans-serif; }`;
    }
}

function applyCustomFont() {
    const customFont = document.getElementById("customFont").value;
    const body = document.body;
    const cssCodeArea = document.getElementById("cssCode");

    if (customFont) {
        body.style.fontFamily = customFont;
        cssCodeArea.value = `body { font-family: ${customFont}; }`;
    }
}

function copyCSS() {
    const cssCodeArea = document.getElementById("cssCode");
    cssCodeArea.select();
    document.execCommand("copy");
    alert("CSS code copied to clipboard!");
}
