document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  let events = []

  form.addEventListener('submit', function(e) {
    e.preventDefault()
    let newTask = e.target.children[1].value
    if (newTask != "") {
      events.push(newTask)
    }
    console.log(events)
    updateTasks()
  })

  function updateTasks() {
    let list = document.getElementById('tasks')
    for (var i = 0; i < events.length; i++) {
      let item = document.createElement('li')
      item.innerText = events[i]
      list.appendChild(item)
    }
    events = []
  }
});
