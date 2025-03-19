const cards = document.querySelector("#cards");
const play = document.querySelector("#get-cards");

const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=2";

play.addEventListener("click", async () => {
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data)

    let cardSet = "";

    data.cards.forEach(card => {
        // console.log(card.image);
        cardSet += `<img src=${card.image} />`;
    });

    cards.innerHTML = cardSet;
})