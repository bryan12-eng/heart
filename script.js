// Select the heart element
const heart = document.querySelector('.heart');

// Function to generate random floating positions
function randomFloat() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  heart.style.transform = `translate(${x}px, ${y}px) rotate(-45deg)`;
}

// Change position every 2 seconds
setInterval(randomFloat, 2000);