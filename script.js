function playSound(audio) {
  var sound = document.getElementById(audio);
  sound.volume = 0.25;
  sound.play();
}