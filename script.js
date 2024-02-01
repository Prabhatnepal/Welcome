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
