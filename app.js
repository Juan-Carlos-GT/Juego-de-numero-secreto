
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   if(numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
    document.getElementById("reiniciar").removeAttribute("disabled")
   } else {
    //El usuario no acerto//

    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El numero es menor');
    } else {
        asignarTextoElemento('p', 'El numero es mayor');
    }
    intentos++;
    limpiarCaja();
   }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
      let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(listaNumerosSorteados);
        console.log(numeroGenerado);
        if (listaNumerosSorteados.length == numeroMaximo) {
            asignarTextoElemento("p","Ya se sortearon todos los numeros posibles")
        } else {
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();

            } else {
                listaNumerosSorteados.push(numeroGenerado);
                
                return numeroGenerado;
            }  
}

}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja()
    condicionesIniciales()
    document.getElementById("reiniciar").setAttribute("disabled", "true")
}

condicionesIniciales();