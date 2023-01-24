function playSound(audio) {
  var sound = document.getElementById(audio);
  sound.volume = 0.25;
  sound.play();
}

function random() {
  const array = ['btn-outline-primary', 'btn-outline-success', 'btn-outline-info', 'btn-outline-danger'];
  const random = Math.floor(Math.random() * array.length);
  const result = array[random];

  var elements = document.getElementsByTagName('button');
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add(result);
  }
}