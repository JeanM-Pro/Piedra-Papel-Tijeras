const piedraPapelTijera = (jugador=undefined)=>{

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

piedraPapelTijera('papel');