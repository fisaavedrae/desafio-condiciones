
let ifBorder = false; // Prueba 1

// Prueba 1
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
// Prueba 2
function verificarStickers() {
    let sticker1 = document.getElementById('sticker1');
    let sticker2 = document.getElementById('sticker2');
    let sticker3 = document.getElementById('sticker3');
    let mensaje = document.querySelector(".mensaje");

    let total = Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value);
    console.log(total);
    if (total <= 10) {
        mensaje.innerHTML = "Llevas " + total + " stickers";
        mensaje.style.color = "hsl(186, 34%, 60%)";
    }
    else {
        mensaje.innerHTML = "Llevas demasiados stickers";
        mensaje.style.color = "hsl(10, 79%, 65%)";
    }
}

function verificarPassword() {
    let primerNumero = document.getElementById('n1');
    let segundoNumero = document.getElementById('n2');
    let tercerNumero = document.getElementById('n3');
    let mensaje = document.querySelector(".mensaje");

    console.log("primerNumero: " + primerNumero.value + " segundoNumero: " + segundoNumero.value + " tercerNumero: " + tercerNumero.value);
    mensaje.innerHTML = "";
    if (primerNumero.value == 9 && segundoNumero.value == 1 && tercerNumero.value == 1) {
        mensaje.innerHTML = "password 1 correcto";
        mensaje.style.color = "hsl(186, 34%, 60%)";
    }
    else if (primerNumero.value == 7 && segundoNumero.value == 1 && tercerNumero.value == 4) {
        mensaje.innerHTML = "password 2 correcto";
        mensaje.style.color = "hsl(186, 34%, 60%)";
    }
    else {
        mensaje.innerHTML = "password incorrecto";
        mensaje.style.color = "hsl(10, 79%, 65%)";
    }
}
