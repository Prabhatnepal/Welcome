
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prabhat Nepal</title>
  <script>
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
  </script>
  <style>
    @keyframes flyPlane {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(80vw);
  }
  100% {
    transform: translateX(100vw);
  }
}

@keyframes lightningStrike {
  0% {
    opacity: 1;
    transform: scaleY(1);
  }
  20% {
    opacity: 0.8;
    transform: scaleY(1.2);
  }
  40% {
    opacity: 1;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
  }
}

    @keyframes rotate {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}


@keyframes lightning {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0.8;
    transform: scaleY(1.2);
  }
  40% {
    opacity: 1;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
  }
}
    body {
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
      background-color: #f0f0f0;
      perspective: 1000px;
    }

    header {
      background-color: #333;
      color: #fff;
      padding: 20px;
      text-align: center;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .contact-form {
      align-items: center;
      margin-top: 20px;
      max-width: 400px;
      width: 100%;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .form-group input {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .form-group textarea {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      resize: vertical;
    }

    .form-group button {
      background-color: #333;
      color: #fff;
      padding: 8px 12px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .form-group button:hover {
      background-color: #555;
    }

    .chat-button {
      margin-top: 20px;
    }

    .chat-button a {
      display: inline-block;
      padding: 10px 20px;
      background-color: #333;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
    }

    .chat-button a:hover {
      background-color: #555;
      animation: lightning 5s infinite linear;
    }

    .additional-content{
      margin-top: 20px;
    }

    .button-grid {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      display: grid;
      gap: 10px; /* Gap between buttons */
      margin-top: 20px;
      overflow-y: auto;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }

    .button-grid a {
      display: inline-block;
      padding: 10px 20px;
      background-color: #333;
      color: #fff;
      text-decoration: darkblue;
      border-radius: 4px;
    }

    .button-grid a:hover {
      background-color: #555;
      animation: rotate 10s infinite linear; /* Apply the rotate animation */
      transform-style: preserve-3d; /* Preserve 3D transformations */
    }
    #plane {
  width: 50px;
  height: 20px;
  background-color: #66ccff;
  position: absolute;
  top: 50%;
  left: 0;
}

#cloud {
  width: 100px;
  height: 50px;
  background-color: #f0f0f0;
  position: absolute;
  top: 20%;
  right: 0;
  animation: lightningStrike 2s infinite linear;
}
    footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-info {
  flex: 1;
  text-align: left;
}

.social-media {
  flex: 1;
  text-align: right;
}

.social-media a {
  color: #fff;
  margin: 0 10px;
  font-size: 20px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-media a:hover {
  color: #007bff; /* Change the color to your desired hover color */
}

.copyright {
  margin-top: 20px;
}

  </style>
</head>
<body>
  <header>
    <h1>Prabhat Nepal</h1>
  </header>

    <section>
      <div class="chat-button">
        <a href="https://chat.openai.com/">Chat with GPT-3.5</a>
      </div>
      <!-- ... other content ... -->
    
      <!-- New div with the name "additional-content" -->
      <div class="additional-content">
        <h2>Lets do a code</h2>
        <p>Get readyyy.</p>
      </div>
    
     
      <div class="button-grid">
        <a href="https://www.w3schools.com/html/default.asp">HTML</a>
        <a href="https://www.w3schools.com/css/default.asp">CSS</a>
        <a href="https://www.w3schools.com/js/default.asp">JavaScript</a>
        <a href="https://www.w3schools.com/sql/default.asp">SQL</a>
        <a href="https://www.w3schools.com/python/default.asp">Python</a>
        <a href="https://www.w3schools.com/java/default.asp">Java</a>
        <a href="https://www.w3schools.com/python/default.asp">PhP</a>
        <a href="https://www.w3schools.com/howto/default.asp">How To</a>
        <a href="https://www.w3schools.com/w3css/default.asp">w3css</a>
        <a href="https://www.w3schools.com/c/default.asp">C</a>
        <a href="https://www.w3schools.com/cpp/default.asp">C++</a>
        <a href="https://www.w3schools.com/cs/default.asp">C#</a>
        <a href="https://www.w3schools.com/bootstrap/default.asp">Bootstrap</a>
        <a href="https://www.w3schools.com/react/default.asp">React</a>
        <a href="https://www.w3schools.com/mysql/default.asp">Mysql</a>
        <a href="https://www.w3schools.com/jquery/default.asp">Jquery</a>
        <a href="https://www.w3schools.com/excel/index.php">Excel</a>
        <a href="https://www.w3schools.com/xml/default.asp">Xml</a>
        <a href="https://www.w3schools.com/Django/index.php">Django</a>
        <a href="https://www.w3schools.com/python/numpy/default.asp">Numpy</a>
        <a href="https://www.w3schools.com/python/pandas/default.asp">Pandas</a>
        <a href="https://www.w3schools.com/nodejs/default.asp">NodeJs</a>
        <a href="https://www.w3schools.com/r/default.asp">R</a>
        <a href="https://www.w3schools.com/typescript/index.php">Typescript</a>
        <a href="https://www.w3schools.com/angular/default.asp">AngularJs</a>
        <a href="https://www.w3schools.com/git/default.asp">Git</a>
        <a href="https://www.w3schools.com/postgresql/index.php">Postgresql</a>
        <a href="https://www.w3schools.com/mongodb/index.php">Mongodb</a>
        <a href="https://www.w3schools.com/Asp/default.asp">Asp</a>
        <a href="https://www.w3schools.com/aws/index.php">Aws</a>
        <a href="https://www.w3schools.com/ai/default.asp">AI</a>
        <a href="https://www.w3schools.com/go/index.php">Go</a>
        <a href="https://www.w3schools.com/kotlin/index.php">Kotlin</a>
        <a href="https://www.w3schools.com/sass/default.asp">SASS</a>
        <a href="https://www.w3schools.com/vue/index.php">Vue</a>
        <a href="https://www.w3schools.com/gen_ai/index.php">Gen AI</a>
        <a href="https://www.w3schools.com/python/scipy/index.php">Scipy</a>
        <a href="https://www.w3schools.com/cybersecurity/index.php">CyberSecurity</a>
        <a href="https://www.w3schools.com/datascience/default.asp">DataScience</a>
      </div>

      <div class="additional-content">
        <h2>Let's play a game</h2>
        <p>Guess the number between 1 and 100:</p>
        <form id="guessForm">
          <input type="number" id="guessInput" min="1" max="100" required>
          <button type="submit">Submit Guess</button>
        </form>
        <p id="resultMessage"></p>
    
        <div id="plane"></div>
        <div id="cloud"></div>
      </div>
    </section>

    
    <section>
      <div class="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">

            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <div class="form-group">
              <button type="submit">Send Message</button>
            </div>
        </form>
      </div>
    </section>
    <footer>
      <div class="footer-content">
        <div class="footer-info">
          <h2>Contact Information</h2>
          <p>Email: nepalprabhat21@gmail.com</p>
        </div>
        <div class="social-media">
          <h2>Follow Me</h2>
          <!-- Add your Font Awesome social media icons and links here -->
          <a href="https://www.facebook.com/prabhatnepal.69" target="_blank"><img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="Facebook"></a>
          <a href="https://twitter.com/prabhat69x" target="_blank"><img src="https://img.icons8.com/?size=48&id=5MQ0gPAYYx7a&format=png" alt="Twitter"></a>
          <a href="https://www.instagram.com/nepal_prabhat/" target="_blank"><img src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png" alt="Instagram"></a>
          <a href="https://github.com/Prabhatnepal" target="_blank"><img src="https://img.icons8.com/?size=48&id=63777&format=png" alt="Github"></a>
          <!-- Add more icons as needed -->
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2024 Prabhat Nepal. All rights reserved.</p>
      </div>
    </footer>
