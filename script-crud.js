const btnAddTask = document.querySelector('.app__button--add-task')
const formAddTask = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-add-task')

const tasks = []

btnAddTask.addEventListener('click', () => {
  formAddTask.classList.toggle('hidden')
} )

formAddTask.addEventListener('submit',(event) => {
  event.preventDefault();
  const task = {
    descript: textarea.value
  }
  tasks.push(task)
  localStorage.setItem('tasks', tasks)
})
