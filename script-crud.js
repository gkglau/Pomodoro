const btnAddTask = document.querySelector('.app__button--add-task')
const btnCancel = document.querySelector('.app__form-footer__button--cancel')
const formAddTask = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')
const ulTasks = document.querySelector('.app__section-task-list')
const paragraphTaskDescript = document.querySelector('.app__section-active-task-description')

const btnRemoveCompleted = document.querySelector('#btn-remover-concluidas')
const btnRemoveAll = document.querySelector('#btn-remover-todas')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []
let selectedTask = null
let liSelectedTask = null

function updateTasks () {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function createElTask(task){
  const li = document.createElement('li')
  li.classList.add('app__section-task-list-item')

  const svg = document.createElement('svg')
  svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
  `
  const paragraph = document.createElement('p')
  paragraph.textContent = task.descript
  paragraph.classList.add('app__section-task-list-item-description')

  const button = document.createElement('button')
  button.classList.add('app_button-edit')

  button.onclick = () => {
    const editDescription = prompt("What's the new task?")

    if (editDescription){
      paragraph.textContent = editDescription
      task.descript = editDescription
      updateTasks()
    }
  }

  const imageButton = document.createElement('img')
  imageButton.setAttribute('src', 'images/edit.png')
  button.append(imageButton)

  li.append(svg)
  li.append(paragraph)
  li.append(button)

  if (task.complete) {
    li.classList.add('app__section-task-list-item-complete')
    button.setAttribute('disabled', 'disabled')
  } else {
    li.onclick = () => {
      document.querySelectorAll('.app__section-task-list-item-active')
        .forEach(element => {
          element.classList.remove('app__section-task-list-item-active')
        })

      if (selectedTask == task) {
        paragraphTaskDescript.textContent = ""
        selectedTask = null
        liSelectedTask = null
        return
      }

      selectedTask = task
      liSelectedTask = li
      paragraphTaskDescript.textContent = task.descript
      li.classList.add('app__section-task-list-item-active')
    }
  }

  return li
}

btnAddTask.addEventListener('click', () => {
  formAddTask.classList.toggle('hidden')
} )

btnCancel.addEventListener('click', () => {
  textarea.value = ''
  formAddTask.classList.toggle('hidden')
} )

formAddTask.addEventListener('submit',(event) => {
  event.preventDefault();
  const task = {
    descript: textarea.value
  }
  tasks.push(task)
  const el = createElTask(task)
  ulTasks.append(el)
  updateTasks()

  textarea.value = ''
  formAddTask.classList.add('hidden')
})

tasks.forEach(task => {
   const el = createElTask(task)
   ulTasks.append(el)
});

document.addEventListener('focusEnd', () => {
  if (selectedTask && liSelectedTask) {
    liSelectedTask.classList.remove('app__section-task-list-item-active')
    liSelectedTask.classList.add('app__section-task-list-item-complete')
    liSelectedTask.querySelector('button').setAttribute('disabled', 'disabled')
    selectedTask.complete = true
      updateTasks()
    }
  }
)

const removeTasks = (onlyCompleted) => {
    const selector = onlyCompleted ?  ".app__section-task-list-item-complete" : ".app__section-task-list-item"
      document.querySelectorAll(selector).forEach(element => {
        element.remove()
    })
    tasks = onlyCompleted ? tasks.filter(task => !task.complete) : []
    updateTasks()
}
btnRemoveCompleted.onclick = () =>  removeTasks(true)
btnRemoveAll.onclick = () => removeTasks(false)
