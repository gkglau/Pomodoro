const html = document.querySelector('html');

const focusBtn = document.querySelector('.app__card-button--foco');
const shortBtn = document.querySelector('.app__card-button--curto');
const longBtn = document.querySelector('.app__card-button--longo');
const buttons = document.querySelectorAll('.app__card-button');

const playMusic = document.querySelector('#alternar-musica');
const music = new Audio('/sounds/luna-rise-part-one.mp3');
music.loop = true

playMusic.addEventListener('change', ()=> {
  if (music.paused) {
    music.play()
  } else {
    music.pause()
  }
})

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
