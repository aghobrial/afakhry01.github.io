<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/main.css">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
  <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="scripts/typed.js"></script>
  <script type="text/javascript" src="scripts/main.js"></script>
  <title>Andrew Fakhry - Software Engineer & Full Stack Web Developer</title>
</head>
<body>
  <header class="header">
    <div class="header__hamburger" onclick="toggleMenu()">
      <div class="bar hamburger__bar1"></div>
      <div class="bar hamburger__bar2"></div>
      <div class="bar hamburger__bar3"></div>
    </div>
    <nav id="drawer" class="nav">
      <ul class="nav__list">
        <li class="nav__item"><a href="#">Home</a></li>
        <li class="nav__item"><a href="#">Projects</a></li>
        <li class="nav__item"><a href="#">Career Plans</a></li>
        <li class="nav__item"><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <!-- intro section -->
    <section class="intro">
      <div class="intro__image"></div>
      <h1 class="intro__name">Andrew Fakhry</h1>
      <h1 class="intro__position"></h1>
      <script>
      var options = {
      strings: ["Software Engineer ^4000", "Full Stack Web Developer ^4000"],
      typeSpeed: 50,
      smartBackspace: true,
      backSpeed: 30,
      showCursor: false,
      loop: true
      }
      var typed = new Typed(".intro__position", options);
      </script>
    </section>
    <!-- Projects section -->
    <section class="projects">

      <div class="projects__main__container">
        <div class="projects__container">
          <h2 class="projects__container__header">Pixel Drawing Panel</h2>
          <img class="projects__container__image" src="projects/drawingpanel/docs/pixelPanelScreenshot.png"/>
          <p class="projects__container__description">A pixel drawing panel that you can use to do nice drawings and save them as pictures. You may also change the drawing panel size and use different colors. It was built using <strong>HTML, CSS and jQuery</strong>.</p>
          <div class="projects__container__buttons">
            <button class="projects__button" onclick="window.location = 'projects/drawingpanel/index.html';">Preview</button>
            <button class="projects__button" onclick="window.location = 'https://github.com/afakhry01/PixelDrawingPanel';">Source</button>
          </div>
        </div>

        <div class="projects__container">
          <h2 class="projects__container__header">Piano Player</h2>
          <img class="projects__container__image" src="projects/pianoplayer/docs/screenshot.png"/>
          <p class="projects__container__description">A piano player website which allows basic music playing for ear training and some basic composing. Use keyboard buttons to play the music scale. It was built using <strong>HTML, CSS and vanilla javascript</strong>.</p>
          <div class="projects__container__buttons">
            <button class="projects__button" onclick="window.location = 'projects/pianoplayer/index.html';">Preview</button>
            <button class="projects__button" onclick="window.location = 'https://github.com/afakhry01/music-composer';">Source</button>
          </div>
        </div>

        <div class="projects__container">
          <h2 class="projects__container__header">Picture Controls</h2>
          <img class="projects__container__image" src="projects/picturecontrols/docs/screenshot.png"/>
          <p class="projects__container__description">You can control the frame color, frame margin and the picture blur through real time controls adjustments using CSS variables and Javascript. It was built using <strong>HTML, vanilla javascript and mainly CSS</strong>.</p>
          <div class="projects__container__buttons">
            <button class="projects__button" onclick="window.location = 'projects/picturecontrols/index.html';">Preview</button>
            <button class="projects__button" onclick="window.location = 'https://github.com/afakhry01/real-time-css-properties';">Source</button>
          </div>
        </div>

        <div class="projects__container">
          <h2 class="projects__container__header">CSS Clock</h2>
          <img class="projects__container__image" src="projects/cssclock/docs/screenshot.png"/>
          <p class="projects__container__description">This website shows analog and digital clocks of the current time. The design is responsive and works on a variety of devices. The clock shape was created using CSS styling. It was built using <strong>HTML, CSS and vanilla javascript</strong>.</p>
          <div class="projects__container__buttons">
            <button class="projects__button" onclick="window.location = 'projects/cssclock/index.html';">Preview</button>
            <button class="projects__button" onclick="window.location = 'https://github.com/afakhry01/clock';">Source</button>
          </div>
        </div>

        <div class="projects__container">
          <h2 class="projects__container__header">Portfolio</h2>
          <img class="projects__container__image" src="projects/portfolio/docs/screenshot.png"/>
          <p class="projects__container__description">My old portfolio website that shows skills, featured projects and a contact form. The design is fully responsive and was optimized to work on all devices. It was built using <strong>Bootstraps, HTML, CSS and PHP</strong>.</p>
          <div class="projects__container__buttons">
            <button class="projects__button" onclick="window.location = 'projects/portfolio/index.php';">Preview</button>
          </div>
        </div>

        <div class="projects__container">
          <h2 class="projects__container__header">Jaam TV</h2>
          <img class="projects__container__image" src="projects/jaamtv/docs/screenshot.png"/>
          <p class="projects__container__description">Jaam TV is a foreign channels broadcasting company. I completely designed their website and created all the graphics including the logo, banners and slideshows. It also accepts online payments through stripe.</p>
          <div class="projects__container__buttons">
            <button class="projects__button" onclick="window.location = 'www.jaam.tv';">Preview</button>
          </div>
        </div>

        <div class="projects__container">
          <h2 class="projects__container__header">Old Movies</h2>
          <img class="projects__container__image" src="projects/oldmovies/docs/screenshot.png"/>
          <p class="projects__container__description">A lot of old movies are so great and, fortunately, some of them are now in the public domain. This website collects these movies in one place. It was built using <strong>Bootstraps, HTML, CSS and Django/Python</strong>.</p>
          <div class="projects__container__buttons">
            <button class="projects__button" onclick="window.location = 'https://github.com/afakhry01/public-domain-movies-website';">Source</button>
          </div>
        </div>

        <div class="projects__container">
          <h2 class="projects__container__header">Bicolorable Graph</h2>
          <img class="projects__container__image" src="projects/bicolorable/docs/screenshot.png"/>
          <p class="projects__container__description">Calculates the possibility of having a BiColorable (bipartite) set of nodes when they are connected through a number of edges through searching for two adjacent nodes with the same color. It was built using <strong>C++</strong>.</p>
          <div class="projects__container__buttons">
            <button class="projects__button" onclick="window.location = 'https://github.com/afakhry01/bicolorable';">Source</button>
          </div>
        </div>

        <div class="projects__container">
          <h2 class="projects__container__header">Flee Game</h2>
          <img class="projects__container__image" src="projects/flee/docs/screenshot.png"/>
          <p class="projects__container__description">The first software I ever built six years ago. Try to save Horus from the evil octopus and challenge yourself to achieve a new high score. Be careful because the octopus gets mad really fast! It was built using <strong>Delphi</strong>.</p>
          <div class="projects__container__buttons">
            <button class="projects__button" onclick="window.location = 'projects/flee/flee.exe';">Download</button>
          </div>
        </div>
      </div>
    </section>
    <!-- Career section -->
    <section class="career">
      <img src="images/growwithgoogle.png" alt="" class="career__image__growWithGoogle"/>
      <div class="career__main__container">

        <div class="career__container">
          <h1 class="career__container__header">Earn Google Developer Challenge Scholarship.</h1>
          <p class="career__container__description">January 2018</p>
          <p class="career__container__description career__complete">Complete</p>
        </div>

        <div class="career__container__empty">
          <h1 class="career__container__header__empty">Get Google Mobile Web Specialist Certification.</h1>
          <p class="career__container__description__empty">April 2018</p>
          <p class="career__container__description career__inProgress">In Progress</p>
        </div>

        <div class="career__container__empty">
          <h1 class="career__container__header__empty">Master Node.js Through Live Website Experience.</h1>
          <p class="career__container__description__empty">July 2018</p>
          <p class="career__container__description career__inProgress">In Progress</p>
        </div>

        <div class="career__container__empty">
          <h1 class="career__container__header__empty">Start Masters Degree In Computer Science.</h1>
          <p class="career__container__description__empty">August 2018</p>
          <p class="career__container__description career__inProgress">In Progress</p>
        </div>

        <div class="career__container__empty">
          <h1 class="career__container__header__empty">Earn Agile Development Scrum Certification.</h1>
          <p class="career__container__description__empty">December 2018</p>
          <p class="career__container__description career__inProgress">In Progress</p>
        </div>
      </div>
    </section>
    <!-- Contact Section -->
    <section class="contact">
      <div class="contact__main__container">
        <div class="contact__container">
          <form action="https://formcarry.com/s/r1_HVezdM" method="POST" accept-charset="UTF-8" id="contact__form">
            <input class="contact__input" type="text" name="firstname" placeholder="First Name">
            <input class="contact__input" type="text" name="lastname" placeholder="Last Name">
            <input class="contact__input" type="email" name="email" placeholder="Email">
            <input class="contact__input" type="text" name="subject" placeholder="Subject">
            <textarea class="contact__message" name="Message" form="contact__form" placeholder="Message"></textarea>
            <input class="contact__submit" type="submit" name="submit" value="Submit">
          </form>
        </div>
      </div>
    </section>
    <!-- Footer Section -->
    <footer class="footer">
      <p class="footer__description">Butte, MT 59701</p>
      <p class="footer__description">All rights reserved, &nbsp; Andrew Fakhry 2018</p>
      <a class="footer__github" href="https://github.com/afakhry01"><i class="fab fa-github"></i></a>
    </footer>
  </main>
</body>
</html>
