const cards = document.querySelector(".cards");
const card = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let counter = 0;
const cardWidth = card[0].offsetWidth + 20;

nextBtn.addEventListener("click", () => {
    if (counter < card.length - 1) {
        counter++;
        cards.style.transform = `translateX(-${counter * cardWidth}px)`;
    } else {
        counter = 0;
        cards.style.transform = `translateX(0)`;
    }
});

prevBtn.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        cards.style.transform = `translateX(-${counter * cardWidth}px)`;
    } else {
        counter = card.length - 1;
        cards.style.transform = `translateX(-${counter * cardWidth}px)`;
    }
});
