const html = document.querySelector('html');
// buttons
const focusBtn = document.querySelector('.app__card-button--foco');
const shortBtn = document.querySelector('.app__card-button--curto');
const longBtn = document.querySelector('.app__card-button--longo');
const buttons = document.querySelectorAll('.app__card-button');
const startBtn= document.querySelector('#start-pause span')

// sounds
const playMusic = document.querySelector('#alternar-musica');
const music = new Audio('/sounds/luna-rise-part-one.mp3');
music.loop = true

const playSound = new Audio('sounds/play.wav');
const pauseSound = new Audio('sounds/pause.mp3');
const endSound = new Audio('sounds/beep.mp3');

// countdown
let timePassedSeconds = 1500
const startPauseBtn = document.querySelector('#start-pause')
let intervalId = null

//timescreen
const timeScreen = document.getElementById('timer')

// plau music
playMusic.addEventListener('change', ()=> {
  if (music.paused) {
    music.play()
  } else {
    music.pause()
  }
})

// change theme
focusBtn.addEventListener('click', () => {
  timePassedSeconds = 1500
  changeContext('foco')
  focusBtn.classList.add('active')
})

shortBtn.addEventListener('click', () => {
  timePassedSeconds = 300
  changeContext('descanso-curto')
  shortBtn.classList.add('active')
})

longBtn.addEventListener('click', () => {
  timePassedSeconds = 900
  changeContext('descanso-longo')
  longBtn.classList.add('active')
})

function changeContext(context) {
  showTimeScreen()
  buttons.forEach(function (context) {
        context.classList.remove('active')
    })
    html.setAttribute('data-contexto', context)
}

// countdown
const countdown = () => {
  if(timePassedSeconds <= 0){
    endSound.play()
    alert("Time's up.")
    reset()
    return
  }
    timePassedSeconds -= 1
    showTimeScreen()
}

startPauseBtn.addEventListener('click', startCount)

function startCount() {
  if(intervalId){
    reset()
    pauseSound.play()
    return
  }
  playSound.play()
    intervalId = setInterval(countdown, 1000)
     startBtn.innerHTML = `<span><i class="fa-solid fa-pause"></i>Pause</span>`

}

function reset() {
    clearInterval(intervalId)
    startBtn.innerHTML = `<span><i class="fa-solid fa-play"></i>Play</span>`
    intervalId = null
}

// timescreen

function showTimeScreen() {
  const time = new Date(timePassedSeconds * 1000)
  const formattedTime = time.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
  timeScreen.innerHTML = `${formattedTime}`
}

showTimeScreen()
