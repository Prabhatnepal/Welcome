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
