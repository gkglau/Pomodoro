const html = document.querySelector('html');
// buttons
const focusBtn = document.querySelector('.app__card-button--foco');
const shortBtn = document.querySelector('.app__card-button--curto');
const longBtn = document.querySelector('.app__card-button--longo');
const buttons = document.querySelectorAll('.app__card-button');

// sounds
const playMusic = document.querySelector('#alternar-musica');
const music = new Audio('/sounds/luna-rise-part-one.mp3');
music.loop = true

const playSound = new Audio('/sounds/play.wav');
const pauseSound = new Audio('/sounds/pause.mp3');
const endSound = new Audio('/sounds/beep.mp3');

let timePassedSeconds = 5
const startPauseBt = document.querySelector('#start-pause')
let intervalId = null

playMusic.addEventListener('change', ()=> {
  if (music.paused) {
    music.play()
  } else {
    music.pause()
  }
})

// change theme
focusBtn.addEventListener('click', () => {
  changeContext('foco')
  focusBtn.classList.add('active')
})

shortBtn.addEventListener('click', () => {
  changeContext('descanso-curto')
  shortBtn.classList.add('active')
})

longBtn.addEventListener('click', () => {
  changeContext('descanso-longo')
  longBtn.classList.add('active')
})

function changeContext(context) {
  buttons.forEach(function (context) {
        context.classList.remove('active')
    })
    html.setAttribute('data-contexto', context)
}

// countdown
const countdown = () => {
  if(timePassedSeconds <= 0){
    reset()
    endSound.play()
    alert("Time's up.")
    return
  }
    timePassedSeconds -= 1
    console.log('Temporizador: ' + timePassedSeconds)
}

startPauseBt.addEventListener('click', startCount)

function startCount() {
  if(intervalId){
    reset()
    pauseSound.play()
    return
  }
  playSound.play()
    intervalId = setInterval(countdown, 1000)
}

function reset() {
    clearInterval(intervalId)
    intervalId = null
}
