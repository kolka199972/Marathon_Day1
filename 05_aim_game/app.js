const startBtn = document.getElementById('start')
const screens = document.querySelectorAll('.screen')
const timeList = document.getElementById('time-list')
const timeEl = document.getElementById('time')
const board = document.getElementById('board')
const colors = ['aqua', 'lime', 'silver', 'fuchsia', 'yellow', 'teal']
let time = 0
let score = 0

startBtn.addEventListener('click', event => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = +event.target.getAttribute('data-time')
  }
  screens[1].classList.add('up')
  startGame()
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createCircle()
  }
})

function startGame() {
  setTime(time)
  setInterval(decreaseTime, 1000)
  createCircle()
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}

function createCircle() {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  const {height, width} = board.getBoundingClientRect()
  const size = getRandomNumber(10, 50)
  const y = getRandomNumber(0, height - size)
  const x = getRandomNumber(0, width - size)
  const color = colors[Math.floor(Math.random() * colors.length)]
  board.append(circle)
  
  circle.style.width = circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.backgroundColor = color
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function finishGame() {
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Счет:<span class = "primary">${score}</span></h1>`
}