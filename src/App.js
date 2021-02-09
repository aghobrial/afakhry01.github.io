import './App.css';

function App() {
  return (
    <div className="App">
    <header class="header">
        <div class="header__hamburger" onclick="toggleMenu(this)">
            <div class="bar hamburger__bar1"></div>
            <div class="bar hamburger__bar2"></div>
            <div class="bar hamburger__bar3"></div>
        </div>
        <nav id="drawer" class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a href="index.html">Home</a></li>
                <li class="nav__item menu" data-move="projects"><a href="">Projects</a></li>
                <li class="nav__item menu" data-move="contact"><a href="">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="intro" class="intro">
            <div class="intro__image"></div>
            <h1 class="intro__name">Andrew Fakhry</h1>
            <h1 class="intro__position"></h1>
            {/*<script>
                var options = {
                    strings: ["Software Engineer, MS ^4000", "DISH Technologies ^4000"],
                    typeSpeed: 50,
                    smartBackspace: true,
                    backSpeed: 30,
                    showCursor: false,
                    loop: true
                }
                var typed = new Typed(".intro__position", options);
              </script>*/}
        </section>

        {/*<!-- Projects section -->*/}
        <section class="projects">

            {/*<!-- Embedded -->*/}
            <div id="projects" class="projects__container__buttons" data-aos="zoom-in">
                <button class="projects__section__button">Most Recent</button>
            </div>

            <div class="projects__main__container">

                <div class="projects__container" data-aos="zoom-in">
                    <h2 class="projects__container__header">Digits Decoder</h2>
                    <iframe class="projects__container__image" width="869" height="200" src="https://www.youtube.com/embed/VOyAz1Mdv_g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {/*<!-- <img class="projects__container__image" src="images/epaper.png" alt="ePaper Tag" /> -->*/}
                    <p class="projects__container__description">A region-proposal Deep Learning Computer Vision model to detect and classify digits based on SVHN dataset. Model was created using Python and PyTorch. </p>
                    <div class="projects__container__buttons">
                        <button class="projects__button" onclick="window.location = 'https://github.com/afakhry01/digit-detection-and-classification';">Source</button>
                    </div>
                </div>
                <div class="projects__container" data-aos="zoom-in">
                    <h2 class="projects__container__header">Quadcopter</h2>
                    <img class="projects__container__image" src="images/beaglebone.jpg" alt="ePaper Tag" />
                    <p class="projects__container__description">A drone that can be controlled using WiFi and LTE and broadcast video. A beaglebone black board will be used for this project with Yocto and openCV using C and Python.</p>
                    <div class="projects__container__buttons">
                        <button class="projects__button" onclick="window.location = 'https://github.com/afakhry01/yocto-zeus-ros-eloquent';">Source</button>
                    </div>
                </div>

            </div>

            {/*<!-- Others -->*/}
            <div class="projects__container__buttons" data-aos="zoom-in">
                <button class="projects__section__button">A Bit Older</button>
            </div>

            <div id="projects" class="projects__main__container">

                <div class="projects__container" data-aos="zoom-in">
                    <h2 class="projects__container__header">Pixel Drawing Panel</h2>
                    <img class="projects__container__image" src="projects/drawingpanel/docs/pixelPanelScreenshot.png" alt="Pixel Drawing Panel" />
                    <p class="projects__container__description">A pixel drawing panel that you can use to do nice drawings and save them as pictures. You may also change the drawing panel size and use different colors. It was built using <strong>HTML, CSS and jQuery</strong>.</p>
                    <div class="projects__container__buttons">
                        <button class="projects__button" onclick="window.location = 'projects/drawingpanel/index.html';">Preview</button>
                        <button class="projects__button" onclick="window.location = 'https://github.com/afakhry01/PixelDrawingPanel';">Source</button>
                    </div>
                </div>

                <div class="projects__container" data-aos="zoom-in">
                    <h2 class="projects__container__header">Piano Player</h2>
                    <img class="projects__container__image" src="projects/pianoplayer/docs/screenshot.png" alt="Piano Player" />
                    <p class="projects__container__description">A piano player website which allows basic music playing for ear training and some basic composing. Use keyboard buttons to play the music scale. It was built using <strong>HTML, CSS and vanilla javascript</strong>.</p>
                    <div class="projects__container__buttons">
                        <button class="projects__button" onclick="window.location = 'projects/pianoplayer/index.html';">Preview</button>
                        <button class="projects__button" onclick="window.location = 'https://github.com/afakhry01/music-composer';">Source</button>
                    </div>
                </div>

                <div class="projects__container" data-aos="zoom-in">
                    <h2 class="projects__container__header">Flee Game</h2>
                    <img class="projects__container__image" src="projects/flee/docs/flee.png" alt="Flee Game" />
                    <p class="projects__container__description">The first software I ever built six years ago. Try to save Horus from the evil octopus and challenge yourself to achieve a new high score. Be careful because the octopus gets mad really fast! It was built using <strong>Delphi</strong>.</p>
                    <div class="projects__container__buttons">
                        <button class="projects__button" onclick="window.location = 'https://github.com/afakhry01/flee-game/releases/download/v1.0/Flee.exe';">Download</button>
                    </div>
                </div>
            </div>
        </section>
        {/*<!-- Career section -->*/}
        <section class="career">
            <img id="career" class="career__waves" src="images/bottom-color.png" alt="waves" />

        </section>
        {/*<!-- Contact Section -->*/}
        <section class="contact">
            <div id="contact" class="contact__main__container">
                <div class="contact__container">
                    <form action="https://formcarry.com/s/r1_HVezdM" method="POST" accept-charset="UTF-8" id="contact__form">
                        <input class="contact__input" type="text" name="firstname" placeholder="First Name" />
                        <input class="contact__input" type="text" name="lastname" placeholder="Last Name" />
                        <input class="contact__input" type="email" name="email" placeholder="Email" />
                        <input class="contact__input" type="text" name="subject" placeholder="Subject" />
                        <textarea class="contact__message" name="Message" form="contact__form" placeholder="Message"></textarea>
                        <input class="contact__submit" type="submit" name="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
        {/*<!-- Footer Section -->*/}
        <footer class="footer">
            <p class="footer__description">Denver, CO 80111</p>
            <p class="footer__description">Made with &nbsp;<i class="fas fa-heart"></i> &nbsp;by Andrew Fakhry 2020</p>
            <a class="footer__github" href="https://github.com/afakhry01"><i class="fab fa-github"></i></a>
        </footer>
    </main>
    </div>
  );
}

export default App;
