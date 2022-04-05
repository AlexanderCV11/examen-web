import piedraimg from './piedra.png';
import papelimg from './papel.png';
import tijeraimg from './tijera.png';

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const texto = document.getElementById("resultado");
const user = document.getElementById("user");
const srandom = document.getElementById("random");


piedra.addEventListener("click", () =>{
    desicion(1);
})

papel.addEventListener("click", () =>{
    desicion(2);
})

tijera.addEventListener("click", () =>{
    desicion(3);
})

function desicion(jugador){
    const random = Math.floor(Math.random() * 3 + 1)

    if(jugador === 1 && random === 1){
        //perdiste
        texto.innerHTML = "Empataste";
        user.src =piedraimg;
        srandom.src = piedraimg;
    }
    if(jugador === 2 && random === 2){
        //perdiste
        texto.innerHTML = "Empataste";
        user.src = papelimg;
        srandom.src = papelimg;
    }
    if(jugador === 3 && random === 3){
        //perdiste
        texto.innerHTML = "Empataste";
        user.src = tijeraimg;
        srandom.src = tijeraimg;
    }
    if(jugador === 1 && random === 2){
        //perdiste
        texto.innerHTML = "Perdiste";
        user.src =piedraimg;
        srandom.src = papelimg;
    }
    if(jugador === 1 && random === 3){
        //ganaste
        texto.innerHTML = "Ganaste";
        user.src =piedraimg;
        srandom.src = tijeraimg;
    }
    if(jugador === 2 && random === 3){
        //perdiste
        texto.innerHTML = "Perdiste";
        user.src =papelimg;
        srandom.src = tijeraimg;
    }
    if(jugador === 2 && random === 1){
        //ganaste
        texto.innerHTML = "Ganaste";
        user.src =papelimg;
        srandom.src = piedraimg;
    }
    if(jugador === 3 && random === 1){
        //perdiste
        texto.innerHTML = "Perdiste";
        user.src =tijeraimg;
        srandom.src = piedraimg;
    }
    if(jugador === 3 && random === 2){
        //ganaste
        texto.innerHTML = "Ganaste";
        user.src = tijeraimg;
        srandom.src = papelimg;
    }
}