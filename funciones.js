let dom = $(document);
dom.ready(generateChoice);
dom.ready(generateImage);
dom.ready(userCard);
dom.ready(ChangeClicked);
generateChoice = document.getElementById("generateChoice");
generateImage = document.getElementById("generateImage")
userCard = document.getElementById("userCard");
posesion = document.getElementById("posesion");

//User bet chips
var dineroActual1 = 0;
var dineroActual2 = 0;
var dineroActual3 = 0;
var dineroActual4 = 0;
var dineroActual5 = 0;

//Starting chips
var posesion1 = 5;
var posesion2 = 5;
var posesion3 = 5;
var posesion4 = 5;
var posesion5 = 5;



//FUNCIONES PARA CANVIAR EL TEXTO CUANDO SE CLIQUEN LAS IMAGENES DE LAS FICHAS

function canviarTexto() {
    let Imagen1 = $("#Imagen1");
    Imagen1.click(SumoValor1());

}
function canviarTexto1() {
    let Imagen2 = $("#Imagen2");
    Imagen2.click(SumoValor2())

}
function canviarTexto2() {
    let Imagen3 = $("#Imagen3");
    Imagen3.click(SumoValor3())

}
function canviarTexto3() {
    let Imagen4 = $("#Imagen4");
    Imagen4.click(SumoValor4())

}
function canviarTexto4() {
    let Imagen5 = $("#Imagen5");
    Imagen5.click(SumoValor5())

}



function SumoValor1(betWon) {

    let dineroPosesion = $("#Posesion");
    dineroPosesion.text(posesion1);

    let ChipClicked = $("#ChipClicked");
    numero1 = dineroActual1 + 1;

    if (numero1 >= posesion1) {
        numero1 = posesion1;
    }

    ChipClicked.text(numero1)
    dineroActual1 = numero1;

    if (betWon = true) {
        ChipsWon1();
    }

}

function SumoValor2() {

    let dineroPosesion1 = $("#Posesion");
    dineroPosesion1.text(posesion2);


    let ChipClicked1 = $("#ChipClicked1");
    numero2 = dineroActual2 + 1;

    if (numero2 >= posesion2) {
        numero2 = posesion2;
    }

    ChipClicked1.text(numero2)
    dineroActual2 = numero2;



}

function SumoValor3() {
    let dineroPosesion2 = $("#Posesion");
    dineroPosesion2.text(posesion3);

    let ChipClicked2 = $("#ChipClicked2");
    numero3 = dineroActual3 + 1;

    if (numero3 >= posesion3) {
        numero3 = posesion3;
    }

    ChipClicked2.text(numero3)
    dineroActual3 = numero3;





}

function SumoValor4() {

    let dineroPosesion3 = $("#Posesion");
    dineroPosesion3.text(posesion4);

    let ChipClicked3 = $("#ChipClicked3");
    numero4 = dineroActual4 + 1;

    if (numero4 >= posesion4) {
        numero4 = posesion4;
    }

    ChipClicked3.text(numero4)
    dineroActual4 = numero4;



}

function SumoValor5() {
    let dineroPosesion4 = $("#Posesion");
    dineroPosesion4.text(posesion5);

    let ChipClicked4 = $("#ChipClicked4");
    numero5 = dineroActual5 + 1;

    if (numero5 >= posesion5) {
        numero5 = posesion5;
    }

    ChipClicked4.text(numero5)
    dineroActual5 = numero5;



}





//FUNCIONES PARA CAMBIAR LAS IMAGENES DE LAS CARTA


let rondasGanadas = 0;
let rondasPerdidas = 0;
let playerCardValue = 0; // Se necesita almacenar la carta del jugador
let isInitialized = false;

function PlayerCard() {
    let playCard = $("#userCard");
    let randValue = Math.floor((Math.random() * 12) + 1);
    console.log("Player Number Card: " + randValue);
    playerCardValue = randValue;
    PlayerCardDisplay(randValue);
}



function PlayerCardDisplay(randValue) {
    document.getElementById("displayCard").innerHTML = randValue;
}

function Change() {
    let genChoice = $("#generateChoice");
    let randVal = Math.floor((Math.random() * 12) + 1);

    while (randVal === playerCardValue) {
        randVal = Math.floor((Math.random() * 12) + 1);
    }

    GenImg1(randVal);
}


function ChangeClicked() {
    if (!isInitialized) {
        let buttonHigh = $(".higher");
        let buttonLower = $(".lower");

        buttonHigh.click(() => {// aixo es per quan es cliqui el botó  higher
            $(document).data('lastClick', 'higher'); //guardem com a informacio temporal en "lastClick" si s'ha pulsat el boto higher
            Change();
        });

        buttonLower.click(() => { // aixo es per quan es cliqui el botó lower
            $(document).data('lastClick', 'lower'); //guardem com a informacio temporal en "lasClick" si s'ha pulsat el boto lower
            Change();
        });

        isInitialized = true;
    }
}

function GenImg1(genChoice) {

    let choice = $("#generateImage");
    let cardValue = genChoice; //guardem el valor de generador de cartes en una variable anomenada cardValue per poder despres fer la comparacio

    switch (genChoice) {
        case 1:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/AceOfSpades.png");
            break;
        case 2:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/2ofSpades.png");
            break;
        case 3:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/3ofSpades.png");
            break;
        case 4:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/4ofSpades.png");
            break;
        case 5:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/5ofSpades.png");
            break;
        case 6:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/6ofSpades.png");
            break;
        case 7:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/7ofSpades.png");
            break;
        case 8:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/8ofSpades.png");
            break;
        case 9:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/9ofSpades.png");
            break;
        case 10:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/10ofSpades.png");
            break;
        case 11:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/JofSpades.png");
            break;
        case 12:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/QofSpades.png");
            break;
        case 13:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/KofSpades.png");
            break;
    }

    compararCartas(cardValue);
}

function compararCartas(cartaMostradaImagen) {
    let rondaGanada = $("#rondaGanada");
    let rondaPerdida = $("#rondaPerdida");

    // Obtenir el ultim click que s'ha fet, aquesta variable anomenada lastClick esta en la funcio ChangeCliked
    const lastClick = $(document).data('lastClick');

    // Quan es detecti un ultim click, que executi la funcio
    if (lastClick) {
        if (lastClick === 'higher') { //de la funcio ChangeClicked, recollim la informacio del ultim click que em afegit en "lastClick" i si es el boto higher entrem a aquest if
            if (cartaMostradaImagen > playerCardValue) {
                rondasGanadas++;
                rondaGanada.text(rondasGanadas);
                //add winnings to chips owned
                let betWon = true;//for (if) to change printed number  
                ChipsWon1();
            } else {
                rondasPerdidas++;
                rondaPerdida.text(rondasPerdidas);
                //substranct chips betted from chips owned
                let betWon = false;
            }
        } else if (lastClick === 'lower') { //de la funcio ChangeClicked, recollim la informacio del ultim click que em afegit en "lastClick" i si es el boto lower entrem a aquest if
            if (cartaMostradaImagen < playerCardValue) {
                rondasGanadas++;
                rondaGanada.text(rondasGanadas);
                //add winnings to chips owned
                let betWon = true;
                ChipsWon1();
            } else {
                rondasPerdidas++;
                rondaPerdida.text(rondasPerdidas);
                //substranct chips betted from chips owned
                let betWon = false;
            }
        }
        // Eliminar el ultim click que hem fet perque no es sumin rondes de mes
        $(document).data('lastClick', null);
    }
}

function ChipsWon1(dineroActual1, posesion1) {
    let chipsBetWon1 = posesion1 + dineroActual1;
    dineroActual1.text(chipsBetWon1);
    posesion1 = chipsBetWon1;
    dineroActual1 = 0;
}
























//const card = document.querySelector(".card");
//from https://blog.nicm42.co.uk/flip-cards
/* card.addEventListener("click", function () {
  card.classList.toggle("show");
}); */

/* function Change() {
    let genChoice = $("#generateChoice");
    var randVal = Math.floor((Math.random() * 4) + 1);
    console.log(randVal);
    GenImg1(randVal);
}

function GenImg1(genChoice) {
    console.log("Test " + genChoice);
    let choice = $("#generateImage");

    switch (genChoice) {
        case 1:
            choice.attr("src", "Cartas.png");
            break;
    }
} */





