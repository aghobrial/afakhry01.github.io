import React from "react";
import './App.css';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig'
import bottomColor from './images/bottom-color.png';
import ProjectsList from './components/projects/ProjectsList';

function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
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
                <h1 class="intro__position">Software Engineer</h1>
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
                    <button class="projects__section__button">Projects</button>
                </div>

                <div class="projects__main__container">
                    <ProjectsList />
                </div>
            </section>
            {/*<!-- Career section -->*/}
            <section class="career">
                <img id="career" className="career__waves" src={bottomColor} alt="waves" />

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
    </EasybaseProvider>
  );
}

export default App;
