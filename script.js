


window.addEventListener('keydown', (e)=>{
    const instrument = document.getElementById(e.key);
    instrument.classList.add('xxxanimation');
    const audio = new Audio(`${e.key}.wav`)
    audio.play();
    setTimeout(() => {
        instrument.classList.remove('xxxanimation');
    }, 500)
})
e