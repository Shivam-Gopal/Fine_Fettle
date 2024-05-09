'use strict';

function togglePlayPause() {
  var video = document.getElementById("motivationalVideo");
  var playIcon = document.getElementById("playIcon");
  var videoTitle = document.getElementById('videoTitle');
  var replayButton = document.querySelector('.replay-btn');
  var watchMoreLink = document.getElementById('watchMoreLink');

  if (video.paused || video.ended) {
    video.play();
    playIcon.style.display = 'none';
    videoTitle.style.opacity = '0';
    replayButton.style.display = 'none';
    watchMoreLink.style.display = 'none';
  } else {
    video.pause();
    playIcon.style.display = 'inline';
    videoTitle.style.opacity = '1';
    replayButton.style.display = 'inline';
    watchMoreLink.style.display = 'none';
  }
}



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});