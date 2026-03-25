const html = document.querySelector('html')
const focusBtn = document.querySelector('.app__card-button--foco')
const shortBtn = document.querySelector('.app__card-button--curto')
const longBtn = document.querySelector('.app__card-button--longo')

focusBtn.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'foco')
})

shortBtn.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-curto')
})

longBtn.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-longo')
})
