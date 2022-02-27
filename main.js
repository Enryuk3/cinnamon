window.addEventListener('keydown', function(event){
  const audio = document.querySelector(`audio[data-key="${event.code}"]`)

  if(!audio) return;
  audio.play();
})