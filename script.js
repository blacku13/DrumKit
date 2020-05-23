function removeTransition(e){
    if(e.propertyName !== 'transform') return ;

    this.classList.remove('playing') ;
} 

const keys = document.querySelectorAll('.key') ;
keys.forEach( key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
    if(!audio) return ; //if non listed key is pressed
    
    audio.currentTime = 0 ; //rewind
    audio.play();
    key.classList.add('playing');
});

