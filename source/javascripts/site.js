// This is where it all goes :)
  const trackable = document.querySelector('.trackable')
  const name = document.querySelector('.name')
  const connect = document.querySelector('.connect')
  const movement = 50

  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = trackable
    let { offsetX: x, offsetY: y } = e

    if (this !== e.target) {
      x = x + e.target.offsetLeft
      y = y + e.target.offsetTop
    }
    //calculate the maximum movements that we want to happen (total set above)
    const xMovement = Math.round((x / width * movement) - (movement / 2))
    const yMovement = Math.round((y / width * movement) - (movement / 2))

    name.style.textShadow = `
      ${xMovement}px ${yMovement}px 0 orange,
      ${xMovement + 25 }px ${yMovement * -1 + 25}px 0 red`
    connect.style.textShadow = `
      ${xMovement }px ${yMovement * -2 + 25}px 0 red`
  }

  trackable.addEventListener('mousemove', shadow)
