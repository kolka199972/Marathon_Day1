const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const countSlides = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlidesCount = 0
const height = container.clientHeight

sidebar.style.top = `-${(countSlides - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changeSlides('up')
})
downBtn.addEventListener('click', () => {
  changeSlides('down')
})

function changeSlides(direction) {
  if (direction === 'up') {
    activeSlidesCount++
    if (activeSlidesCount === countSlides) {
      activeSlidesCount = 0
    }
  } else if (direction === 'down') {
    activeSlidesCount--
    if (activeSlidesCount < 0) {
      activeSlidesCount = countSlides - 1
    }
  }

  mainSlide.style.transform = `translateY(-${activeSlidesCount * height}px)`
  sidebar.style.transform = `translateY(${activeSlidesCount * height}px)`
}