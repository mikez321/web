// This is where it all goes :)
const trackable = document.querySelector('.trackable')
const name = document.querySelector('.name')
const movement = 50
const color1 = "red"
const color2 = "orange"

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = trackable
  let { offsetX: x, offsetY: y } = e

  if (this !== e.target) {
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }
  const xMovement = Math.round((x / width * movement) - (movement / 2))
  const yMovement = Math.round((y / width * movement) - (movement / 2))

  name.style.textShadow = `
    ${xMovement}px ${yMovement}px 0 ${color2},
    ${xMovement + 25 }px ${yMovement * -1 + 25}px 0 ${color1}`
}

trackable.addEventListener('mousemove', shadow)
