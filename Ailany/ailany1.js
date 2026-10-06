const sobre = document.getElementById("sobre");
const abrirBtn = document.getElementById("abrirBtn");
const pantallaSobre = document.getElementById("pantallaSobre");
const invitacion = document.getElementById("invitacion");


/* =========================================
   ABRIR SOBRE
========================================= */

function abrirInvitacion() {

    // Evitar que se presione varias veces
    abrirBtn.disabled = true;

    // Abrimos el sobre
    sobre.classList.add("abierto");

    // Cambiamos el texto del botón
    abrirBtn.innerHTML = "💌 Abriendo tu invitación...";


    // Esperamos a que la carta salga
    setTimeout(() => {

        pantallaSobre.classList.add("salir");

    }, 1800);


    // Después mostramos la invitación
    setTimeout(() => {

        pantallaSobre.style.display = "none";

        invitacion.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 2800);
}


/* Botón */

abrirBtn.addEventListener(
    "click",
    abrirInvitacion
);


/* También se puede abrir tocando el sobre */

sobre.addEventListener(
    "click",
    () => {

        if (!sobre.classList.contains("abierto")) {

            abrirInvitacion();

        }

    }
);

const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
    alert("🍓 ¡El código de Ailany funciona!");
});