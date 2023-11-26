document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', (e) => {
      e.preventDefault()
      buildToDo(e.target.create_item.value)
      form.reset()
  })
})


function buildToDo(todo){
  console.log(todo)
  let list = document.createElement('li')
  let btn = document.createElement("button")
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()

}