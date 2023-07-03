let ifBorder = false;

function agregarBorder() {
    let imagen = document.querySelector(".imagenPrueba");
    if (!ifBorder) {
        ifBorder = true;
        imagen.style.border = "solid 2px";
        imagen.style.borderColor = "hsl(10, 79%, 65%)";
    }
    else if (ifBorder) {
        ifBorder = false;
        imagen.style.border = "none";

    }
}