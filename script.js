function playSound(audio) {
  var sound = document.getElementById(audio);
  sound.volume = 0.25;
  sound.play();
}

function random() {
  const array = ['btn-outline-info', 'btn-outline-danger', 'btn-outline-lime', 'btn-outline-warning'];
  const random = Math.floor(Math.random() * array.length);
  const result = array[random];

  const elements = document.getElementsByTagName('button');
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add(result);
  }
}