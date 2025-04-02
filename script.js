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

// Seasonal Sun & Moon with Dynamic Effects (Including Valentine's Week)
const canvas = document.createElement("canvas");
canvas.id = "effectCanvas";
document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100vw";
canvas.style.height = "100vh";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "9999";

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
let numberOfParticles = window.innerWidth < 768 ? 30 : 100; // Adjust for mobile

function getSeason() {
const date = new Date();
const month = date.getMonth();
const day = date.getDate();

if (month === 1 && day >= 7 && day <= 14) return "valentine";
if (month >= 5 && month <= 7) return "summer";
if (month >= 8 && month <= 10) return "autumn";
if (month >= 11 || month <= 1) return "winter";
return "rainy";
}

function isDaytime() {
const hour = new Date().getHours();
return hour >= 6 && hour < 18;
}

function drawSunOrMoon() {
const isDay = isDaytime();
const x = canvas.width - 80;
const y = 80;
const radius = window.innerWidth < 768 ? 25 : 50; // Adjust for mobile

ctx.save();
ctx.globalAlpha = 0.8;
ctx.fillStyle = isDay ? "yellow" : "#ddd";
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2);
ctx.fill();
ctx.restore();
}

class Particle {
constructor() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.radius = Math.random() * (window.innerWidth < 768 ? 1.5 : 3) + 1; // Adjust size for mobile
  this.speed = Math.random() * 1.5 + 0.5;
  this.type = getSeason();
  this.wind = Math.random() * 1 - 0.5;
}

update() {
  if (this.type === "summer") this.y -= this.speed;
  else if (this.type === "winter") this.y += this.speed;
  else if (this.type === "autumn") {
    this.y += this.speed;
    this.x += Math.sin(this.y * 0.05) * 2;
  } else if (this.type === "rainy") this.y += this.speed * 4;
  else if (this.type === "valentine") this.y -= this.speed;

  if (this.y > canvas.height) this.y = 0;
  if (this.y < 0) this.y = canvas.height;
  if (this.x > canvas.width) this.x = 0;
  if (this.x < 0) this.x = canvas.width;
}

draw() {
  ctx.save();
  ctx.globalAlpha = 0.7;
  ctx.beginPath();

  if (this.type === "rainy") {
    ctx.fillStyle = "rgba(135, 206, 250, 0.8)";
    ctx.rect(this.x, this.y, 2, 10);
  } else if (this.type === "autumn") {
    ctx.fillStyle = "rgba(255, 165, 0, 0.8)";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  } else if (this.type === "valentine") {
    ctx.fillStyle = "red";
    ctx.moveTo(this.x, this.y);
    ctx.arc(this.x - this.radius / 2, this.y - this.radius / 2, this.radius / 2, Math.PI, 0, false);
    ctx.arc(this.x + this.radius / 2, this.y - this.radius / 2, this.radius / 2, Math.PI, 0, false);
  } else {
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  }
  
  ctx.fill();
  ctx.restore();
}
}

function createParticles() {
particles.length = 0;
for (let i = 0; i < numberOfParticles; i++) {
  particles.push(new Particle());
}
}

createParticles();

function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawSunOrMoon();
particles.forEach((particle) => {
  particle.update();
  particle.draw();
});
requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
numberOfParticles = window.innerWidth < 768 ? 30 : 100;
createParticles();
});

animate();

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Heading Animation (Typing Effect)
  const headings = document.querySelectorAll("h1, h2, h3");
  headings.forEach((heading) => {
    gsap.fromTo(
      heading,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: heading }
    );
  });

  // Content Pop-up Effect
  gsap.utils.toArray(".project, .photo-container img, .contact-form, .button-grid a").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Floating Animation for Interactive Elements
  gsap.to(".logo img", {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "sine.inOut",
  });

  gsap.to(".chat-button a", {
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: "sine.inOut",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Heading Animation (Typing Effect)
  const headings = document.querySelectorAll("h1, h2, h3");
  headings.forEach((heading) => {
    gsap.fromTo(
      heading,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: heading }
    );
  });

  // Content Pop-up Effect
  gsap.utils.toArray(".project, .photo-container img, .contact-form, .button-grid a").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Floating Animation for Interactive Elements
  gsap.to(".logo img", {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "sine.inOut",
  });

  gsap.to(".chat-button a", {
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: "sine.inOut",
  });

  // Parallax Scrolling Effect
  gsap.to(".background", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".background",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  // Rotating Animation for Icons
  gsap.to(".icon", {
    rotation: 360,
    duration: 3,
    repeat: -1,
    ease: "linear",
  });

  // Button Shake Effect on Hover
  document.querySelectorAll(".button-grid a").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { x: 5, duration: 0.1, yoyo: true, repeat: 5, ease: "power1.inOut" });
    });
  });

  // Fade-in Effect for Images with Slight Zoom
  gsap.utils.toArray("img").forEach((img) => {
    gsap.fromTo(
      img,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
});
