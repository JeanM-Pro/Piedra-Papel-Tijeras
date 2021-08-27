/*const piedraPapelTijera = (jugador)=>{

    if (jugador === undefined) return console.warn(`Debe ingresar su jugada (piedra, papel o tijeras)`);

    if (typeof jugador !== 'string') return console.warn(`el tipo de entrada "${jugador}" no es válido. Solo se permite entrada de tipo texto.`);

    jugador = jugador.toLowerCase();

    if (jugador !== 'piedra' && jugador !== 'papel' && jugador !== 'tijeras') return console.warn(`La jugada "${jugador}" no es válida, corrija e intente nuevamente.`);

    let maquina = Math.round(Math.random()*2);

    if (maquina === 0) maquina = 'piedra';
    if (maquina === 1) maquina = 'papel';
    if (maquina === 2) maquina = 'tijeras';

    if (maquina === 'piedra' && jugador === 'piedra' || maquina === 'papel' && jugador === 'papel' || maquina == 'tijeras' && jugador === 'tijeras'){
        console.info(`Computadora: ${maquina} - jugador: ${jugador}.. ¡¡ ES UN EMPATE !!`)
    } else if (maquina === 'piedra' && jugador === 'tijeras' || maquina === 'papel' && jugador === 'piedra' || maquina === 'tijeras' && jugador === 'papel'){
        console.info(`Computadora: ${maquina} - jugador: ${jugador}.. ¡¡ HAS PERDIDO WEY :( !!`)
    } else{
        console.info(`Computadora: ${maquina} - jugador: ${jugador}.. ¡¡ HAS GANADO WEY :) !!`)
    }
    
}

piedraPapelTijera('tijeras');*/

const CHARIZARD = 'Charizard';
const VENUSAUR = 'Venusaur';
const NIDOKING = 'Nidoking';

const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;


const mostrarResultado = document.getElementById('ganaste');

const divJugador = document.getElementById('divJugador');
const divMaquina = document.getElementById('computadora');

const charizardBtn = document.getElementById('charizardBtn');
const venusaurBtn = document.getElementById('venusaurBtn');    
const nidokingBtn = document.getElementById('nidokingBtn');

const jugadorPokemones = document.createElement('img');
jugadorPokemones.src= 'Charizard.jpg';
jugadorPokemones.classList.add('ajustes-de-tarjetas');
divJugador.appendChild(jugadorPokemones);

const maquinaPokemones = document.createElement('img');
maquinaPokemones.src= 'Charizard.jpg';
maquinaPokemones.classList.add('ajustes-de-tarjetas');
divMaquina.appendChild(maquinaPokemones);



charizardBtn.addEventListener('click', ()=>{
    juego(CHARIZARD);
});

venusaurBtn.addEventListener('click', ()=>{
    juego(VENUSAUR);
});

nidokingBtn.addEventListener('click', ()=>{
    juego(NIDOKING);
});



function juego(jugador){

    jugadorPokemones.src = ''+jugador+'.jpg';

    mostrarResultado.innerHTML = 'ELIGIENDO JUGADA';

    const interval = setInterval(() => {
        let maquina = Math.round(Math.random()*2);
        if (maquina === 0) maquina = 'Charizard';
        if (maquina === 1) maquina = 'Venusaur';
        if (maquina === 2) maquina = 'Nidoking';
        maquinaPokemones.src = ''+maquina+'.jpg';
    }, 100);
    
    setTimeout(function(){

        clearInterval(interval);
        let maquina = Math.round(Math.random()*2);
    
        if (maquina === 0) maquina = 'Charizard';
        if (maquina === 1) maquina = 'Venusaur';
        if (maquina === 2) maquina = 'Nidoking';

        const resultadoFinal = calcularResultado(maquina, jugador);

        maquinaPokemones.src = ''+maquina+'.jpg';

        switch(resultadoFinal){
            case EMPATE:
             mostrarResultado.innerHTML = 'TAN EMPATAOS';
             break;
            case GANASTE:
             mostrarResultado.innerHTML = 'GANATE LOCOTRON';
            break;
            case PERDISTE:
            mostrarResultado.innerHTML = 'PELDITE WEY';
            break; 
        };
   
    }, 3000);
    
    
};

function calcularResultado(maquina, jugador){
    if (maquina === jugador){
        return EMPATE;
    } else if (maquina === 'Charizard' && jugador === 'Venusaur' || maquina === 'Venusaur' && jugador === 'Nidoking' || maquina === 'Nidoking' && jugador === 'Charizard'){
        return PERDISTE;
    } else {
        return GANASTE;
    };
};



