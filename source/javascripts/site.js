// This is where it all goes :)
  const trackable = document.querySelector('.trackable')
  const upperL = document.querySelector('.left-upper')
  const name = upperL.querySelector('.name')
  const movement = 50

  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = upperL
    let { offsetX: x, offsetY: y } = e

    if (this !== e.target) {
      x = x + e.target.offsetLeft
      y = y + e.target.offsetTop
    }
    //calculate the maximum movements that we want to happen (total set above)
    const xMovement = Math.round((x / width * movement) - (movement / 2))
    const yMovement = Math.round((y / width * movement) - (movement / 2))

    name.style.textShadow = `
      ${xMovement}px ${yMovement}px 0 aqua,
      ${xMovement * -1}px ${yMovement * -1}px 0 lightgreen`
  }

  trackable.addEventListener('mousemove', shadow)
