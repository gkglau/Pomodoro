const btnAddTask = document.querySelector('.app__button--add-task')
const formAddTask = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-add-task')
const ulTasks = document.querySelector('..app__section-task-list')

const tasks = JSON.parse(localStorage.getItem('tasks')) || []

function createElTask(task){
  const li = document.createElement('li')
  li.classList.add('app__section-task-list-item')
  const svg = document.createElement('svg')
  svg.innerHTML = `
  <svg>
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    </svg>
  `
  const paragraph = document.createElement('p')
  paragraph.textContent = task.descript

  const button = document.createElement('button')
  const imagemBotao = document.createElement('img')
  imageButton.setAttribute('src', 'images/edit.png')
  button.append(imageButton)

  li.append(svg)
  li.append(paragraph)
  li.append(button)

  return li
}

btnAddTask.addEventListener('click', () => {
  formAddTask.classList.toggle('hidden')
} )

formAddTask.addEventListener('submit',(event) => {
  event.preventDefault();
  const task = {
    descript: textarea.value
  }
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
})
tasks.forEach(task => {
   const el = createElTask(task)
   ulTasks.append(el)
});
