window.addEventListener('keydown', function(evt) {
  const audio = document.querySelector("audio[data-key='"+evt.keyCode+"']");
  const key = document.querySelector(".key[data-key='"+evt.keyCode+"']");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('play');

  document.querySelectorAll('.key').forEach(function() {
    this.addEventListener('transitionend', function(evt) {
      evt.target.classList.remove('play');
    });
  });
});
