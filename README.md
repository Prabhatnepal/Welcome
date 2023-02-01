<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body { text-align: center; padding: 20px; font: 20px Helvetica, sans-serif; color: rgb(241, 241, 241); }
      @media (min-width: 768px){
        body{ padding-top: 150px; }
      }
      h1 { font-size: 50px; }
      article { display: block; text-align: left; max-width: 650px; margin: 0 auto; }
      a { color: #dc8100; text-decoration: none; }
      a:hover { color: #333; text-decoration: none; }
    
    </style>
  </head>
  <body>
    <div class="bg">
      <style>
        body
        {
          background-image:url("https://img.freepik.com/premium-vector/abstract-technology-background-science-connecting-technology_42705-96.jpg")
        }
      </style>
     
    </div>
 
     <h1 class="text-3xl font-bold">
    Dear Sir,
  </h1>
    <article>
        <h1 class="text-1xl font-bold text-amber-400">We&rsquo;ll be back soon!</h1>
        <div>
            <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:nepalprabhat21@gmail.com">contact us</a>, otherwise we&rsquo;ll be back online shortly!</p>
            <p class="text-lime-400">&mdash; Prabhat Nepal</p>
        </div>
    </article>
  <div class="clock">

    <div id="clock">8:10:45</div>
   
<style>
    #clock {

      text-align: center; padding: 60px; font: 60px Helvetica, sans-serif; color: rgb(241, 241, 241);border: 4px solid black;  margin: 50px 0 0 0; 
  border-radius: 20px;
}
      @media (min-width: 768px)
    
  </style>
  <script>
    setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  

    let currentTime = hour + ":" 
            + min + ":" + sec +am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();
  </script>
</div>
  <div class="fa">
      <style>
 .fa {
  padding: 20px;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  margin: 50px 2px;
      }

.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}


.fa-google {
  background: #dd4b39;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}


.fa-instagram {
  background: #27ea37;
  color: white;
}
</style>
</head>
<body>

<h2>Contact me:</h2>
<br>

<!-- Add font awesome icons -->
<a href="https://www.facebook.com/prabhatnepal.69" class="fa fa-facebook"></a>
<a href="mailto:nepalprabhat21@gmail.com" class="fa fa-google"></a>
<a href="#" class="fa fa-linkedin"></a>
<a href="https://www.instagram.com/nepal_prabhat/" class="fa fa-instagram"></a>

      

 </div>
    
</body>
</html>
