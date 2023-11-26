const tasks=[]

document.addEventListener("DOMContentLoaded", () => {
  const form = document.addEventListener('submit',(e)=>{
    e.preventDefault();
    const toDo = document.querySelector('#new-task-description')
      if (toDo.value !== ""){
        
        tasks.push(toDo.value)
        let list = document.createElement('li')
        let btn = document.createElement('button')
        btn.addEventListener('click', handleDelete)
        btn.textContent = 'X'
        
        list.textContent = toDo.value
        let item = document.querySelector('#list #tasks')
        console.log(tasks)
        item.appendChild(list)
        list.appendChild(btn)
        toDo.value = ''
      }
  });
  
});

function handleDelete(e){
  e.target.parentNode.remove()

}