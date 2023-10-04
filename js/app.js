const timeCounter = document.getElementById('time')
const fullBtn = document.getElementById('full-btn')
const dateBtn = document.getElementById('date-btn')
const timeBtn = document.getElementById('time-btn')
let time;

dateBtn.onclick = bindTime('date')

timeBtn.onclick = bindTime('time')

fullBtn.onclick = bindTime('full')

update()

setInterval(() => {
  update()
}, 1000);

function bindTime(name) {
  return () => {
    time = name
    update()
  }
}

function update() {
  timeCounter.textContent = format(time)
}

function format(time) {
  const timeNow = new Date()
  switch(time) {
    case 'full': 
      return timeNow.toLocaleDateString() + ' | ' + timeNow.toLocaleTimeString()
    case 'date': 
      return timeNow.toLocaleDateString()
    case 'time':
      return timeNow.toLocaleTimeString()
    default:
      return timeNow.toLocaleDateString() + ' | ' + timeNow.toLocaleTimeString()
  }
}