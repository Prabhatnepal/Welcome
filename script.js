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
        photo.style.transform = 'scale(1.2)';
    });

    photo.addEventListener('mouseleave', () => {
        photo.style.transform = 'scale(1)';
    });
});

// Snow Effect
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];
const numberOfSnowflakes = 100;

class Snowflake {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 4 + 2; // Snowflake size
    this.speed = Math.random() * 2 + 0.5; // Falling speed
    this.wind = Math.random() * 1 - 0.5; // Sideways drift
    this.opacity = Math.random() * 0.8 + 0.2; // Transparency
    this.rotation = Math.random() * 360; // Initial rotation
    this.rotationSpeed = Math.random() * 2 - 1; // Rotation speed
  }

  update() {
    this.y += this.speed;
    this.x += this.wind;
    this.rotation += this.rotationSpeed;

    // Reset position when snowflake exits screen
    if (this.y > canvas.height) this.y = 0;
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);

    // Draw a star-like snowflake
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      ctx.lineTo(0, -this.radius);
      ctx.translate(0, -this.radius);
      ctx.rotate((Math.PI * 2) / 12);
      ctx.lineTo(0, this.radius);
      ctx.translate(0, this.radius);
      ctx.rotate(-(Math.PI * 2) / 6);
    }
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.restore();
  }
}

// Create initial snowflakes
for (let i = 0; i < numberOfSnowflakes; i++) {
  snowflakes.push(new Snowflake());
}

// Animation loop
function animateSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach((snowflake) => {
    snowflake.update();
    snowflake.draw();
  });
  requestAnimationFrame(animateSnow);
}

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Start the animation
animateSnow();

