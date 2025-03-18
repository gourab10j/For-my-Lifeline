// Create floating hearts
function createHearts() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
    }
}

// Reveal hidden messages
function revealMessage(card) {
    const messages = [
        "Your smile lights up my world",
        "Your kindness inspires me daily",
        "You make me a better person",
        "Your love is my greatest treasure"
    ];
    card.querySelector('.hidden-message').textContent = 
        messages[Math.floor(Math.random() * messages.length)];
    
    // Add confetti effect
    for(let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = '✨';
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    // Add more initialization here
});

// Add custom cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.classList.add('heart');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    document.body.appendChild(cursor);
    
    setTimeout(() => cursor.remove(), 1000);
});