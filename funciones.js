let dom = $(document);
dom.ready(generateChoice);
dom.ready(generateImage);
dom.ready(userCard);
dom.ready(ChipClicked);
dom.ready(ChangeClicked);
generateChoice = document.getElementById("generateChoice");
generateImage = document.getElementById("generateImage")
userCard = document.getElementById("userCard");
ChipClicked = document.getElementById("ChipClicked");
Image1 = document.getElementById("Image1");


let numero = 0; 

function ChipClicked(){
    let ChipClicked = $("#ChipClicked");
    let Image1 = $("Image1");
    Image1.click(SumoValor);


} 

function SumoValor(){
    let ChipClicked = $("#ChipClicked");
    numero = ChipClicked + 1;
    document.getElementById("ChipClicked").innerHTML = numero;
     
    
}

function PlayerCard() {
    let playCard = $("#userCard");
    let randValue = Math.floor((Math.random() * 4) + 1);
    console.log("Player Number Card: " + randValue);
    PlayerCardDisplay(randValue); 
}



function PlayerCardDisplay(randValue) {
    document.getElementById("displayCard").innerHTML = randValue;
}

function Change(randValue) {
    console.log("randValue:" + randValue);
    let genChoice = $("#generateChoice");
    let randVal = Math.floor((Math.random() * 4) + 1);
    
    while (randValue == randVal) {
        console.log("repeated");
        randVal = Math.floor((Math.random() * 4) + 1);
    } 
    if(randValue != randVal){
        console.log("IA Player Card: " + randVal);
        GenImg1(randVal);
    }
}

function ChangeClicked(){
    let buttonHigh = $(".higher");
    let buttonLower = $(".lower");
    buttonHigh.click(Change);
    buttonLower.click(Change);
}

function GenImg1(genChoice) {
    //console.log("Test " + genChoice);
    let choice = $("#generateImage");

    switch (genChoice) {
        case 1:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/AceOfHearts.png");
            break;
        case 2:
            choice.attr("src", "../Juego-Carreras-/ImgJuegoApuestas/AceOfDiamonds.png");
            break;
        case 3:
            //console.log("3")
            break;
        case 4:
            //console.log("4")
            break;
    }
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





