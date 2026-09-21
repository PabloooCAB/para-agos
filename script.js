const inicio = document.getElementById("inicio");
const regalo = document.getElementById("regalo");

const aniosElemento = document.getElementById("anios");
const mesesElemento = document.getElementById("meses");
const diasElemento = document.getElementById("dias");

// Fecha de inicio de la relación
const fechaInicio = new Date(2024, 6, 12);

function calcularTiempoJuntos() {

    const hoy = new Date();

    let anios = hoy.getFullYear() - fechaInicio.getFullYear();
    let meses = hoy.getMonth() - fechaInicio.getMonth();
    let dias = hoy.getDate() - fechaInicio.getDate();

    if (dias < 0) {

        meses--;

        const diasMesAnterior = new Date(
            hoy.getFullYear(),
            hoy.getMonth(),
            0
        ).getDate();

        dias += diasMesAnterior;
    }

    if (meses < 0) {
        anios--;
        meses += 12;
    }

    return { anios, meses, dias };

}

function actualizarContador() {

    const tiempo = calcularTiempoJuntos();

    aniosElemento.textContent = String(tiempo.anios).padStart(2, "0");
    mesesElemento.textContent = String(tiempo.meses).padStart(2, "0");
    diasElemento.textContent = String(tiempo.dias).padStart(2, "0");

}

function abrirRegalo() {

    actualizarContador();

    regalo.classList.add("visible", "preparando");
    regalo.setAttribute("aria-hidden", "false");

    inicio.classList.add("saliendo");

    setTimeout(() => {

        inicio.classList.add("pantalla-oculta");
        inicio.hidden = true;

        regalo.classList.remove("preparando");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 650);

}

function abrirCarta() {

    const carta = document.getElementById("carta");

    carta.classList.toggle("abierta");

}

window.abrirRegalo = abrirRegalo;
window.abrirCarta = abrirCarta;