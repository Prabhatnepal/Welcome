// game 
document.addEventListener("DOMContentLoaded", function () {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const guessForm = document.getElementById("guessForm");
  const guessInput = document.getElementById("guessInput");
  const resultMessage = document.getElementById("resultMessage");
  const plane = document.getElementById("plane");
  const cloud = document.getElementById("cloud");

  guessForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess)) {
      resultMessage.textContent = "Please enter a valid number.";
    } else {
      if (userGuess === randomNumber) {
        resultMessage.textContent = "Congratulations! You guessed the correct number!";
        plane.style.animation = "flyPlane 3s linear forwards";
      } else {
        resultMessage.textContent = `Sorry, the correct number was ${randomNumber}. Try again!`;
        cloud.style.animation = "lightningStrike 2s infinite linear";
      }
    } 
  }); 
});


//photoshoot
const photos = document.querySelectorAll('.photo-container img');

photos.forEach(photo => {
  photo.addEventListener('mouseenter', () => {
      photo.style.transform = 'scale(0.75)';
  });

  photo.addEventListener('mouseleave', () => {
      photo.style.transform = 'scale(0.5)';
  });
});

// Function to create animated seasonal elements
function applySeasonalEffect() {
  const month = new Date().getMonth(); 
  const body = document.body;
  const container = document.getElementById("seasonal-container");
  
  // Clear existing effects
  container.innerHTML = "";

  let emoji;
  if (month === 11 || month <= 1) emoji = "❄️";  // Winter (Snow)
  else if (month >= 2 && month <= 4) emoji = "💨";  // Spring (Wind)
  else if (month >= 5 && month <= 7) emoji = "🌧️";  // Summer (Rain)
  else if (month >= 8 && month <= 10) emoji = "🍂";  // Autumn (Leaves)

  // Valentine's Special
  const today = new Date().getDate();
  if (month === 1 && today >= 7 && today <= 14) emoji = "❤️";

 // April 1st (April Fool's Day) Wobble Effect
  if (today.getMonth() === 3 && today.getDate() === 1) {
    gsap.utils.toArray("h1, h2, h3, .project, .photo-container img, .contact-form, .button-grid a").forEach((element) => {
      gsap.to(element, {
        x: "random(-5, 5)",
        rotation: "random(-5, 5)",
        repeat: -1,
        yoyo: true,
        duration: 0.2,
        ease: "sine.inOut",
      });
    });
  }

  // January 1st (New Year's Day) Fireworks Burst Effect
  if (today.getMonth() === 0 && today.getDate() === 1) {
    gsap.utils.toArray("h1, h2, h3, .project, .photo-container img, .contact-form, .button-grid a").forEach((element) => {
      gsap.fromTo(element, 
        { scale: 0.5, opacity: 0 },
        { scale: 1.2, opacity: 1, duration: 0.5, ease: "back.out(2)", repeat: 1, yoyo: true }
      );
    });
  }
  
  // Create multiple falling elements
  for (let i = 0; i < 20; i++) {
      let element = document.createElement("div");
      element.textContent = emoji;
      element.classList.add("falling");
      
      // Random positions & animation delay
      element.style.left = Math.random() * 100 + "vw";
      element.style.animationDuration = (Math.random() * 3 + 3) + "s";
      element.style.fontSize = (Math.random() * 1.5 + 1) + "rem";
      
      container.appendChild(element);
  }
}

// Apply effect on page load
document.addEventListener("DOMContentLoaded", applySeasonalEffect);
