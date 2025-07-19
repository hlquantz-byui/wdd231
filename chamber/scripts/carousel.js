let currentIndex = 0;
const cards = document.querySelectorAll('.event-card');
const totalCards = cards.length;

// Show the first card initially
cards[currentIndex].classList.add('active');

function showCard(index) {
    cards.forEach((card) => {
        card.classList.remove('active'); // Hide all cards
    });
    cards[index].classList.add('active'); // Show the current card
}

function nextCard() {
    currentIndex = (currentIndex + 1) % totalCards; // Loop back to the first card
    showCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards; // Loop to the last card
    showCard(currentIndex);
}
