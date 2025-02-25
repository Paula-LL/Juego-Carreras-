let dom = $(document);
dom.ready(generateChoice);
dom.ready(generateImage);
generateChoice = document.getElementById("generateChoice");
generateImage = document.getElementById("generateImage")

const card = document.querySelector(".card");

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