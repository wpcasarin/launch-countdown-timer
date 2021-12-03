import './scss/main.scss'

window.addEventListener('DOMContentLoaded', () => {
  const zeroPad = (num, places) => String(num).padStart(places, '0')
  let countDownDate = new Date()
  countDownDate.setDate(countDownDate.getDate() + 14)

  setInterval(() => {
    let now = new Date().getTime()
    let distance = countDownDate - now
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.querySelector('.days').innerHTML = zeroPad(days, 2)
    document.querySelector('.hours').innerHTML = zeroPad(hours, 2)
    document.querySelector('.minutes').innerHTML = zeroPad(minutes, 2)
    document.querySelector('.seconds').innerHTML = zeroPad(seconds, 2)
  }, 1000)
})
