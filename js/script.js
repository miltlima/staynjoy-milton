const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"
const cardsContainer = document.querySelector("#cards")
let data = []

async function fetchCards() {
    return await fetch(url)
        .then(async (r) => await r.json())
}

function buildCards(cards) {
    cards.innerHTML = "";
    cards.map(buildCard);
}

function buildCard(card){
    const div = document.createElement("div");
    div.className ="card";
    div.innerHTML = `
    <img src="${card.photo}" id="photo" class="card-img-top" alt="">
                <div class="info">
                    <p id="property_type" class="card-title">${card.property_type}</p>
                    <p id="name" class="card-text">${card.name}</p>
                    <p id="price">R$ ${card.price},00 por Noite</p>
                </div>
    `
    cardsContainer.appendChild(div);
}
async function main() {
    data = await fetchCards();
    if (data){
        buildCards(data);
    }
}

main();