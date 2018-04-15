export function onCardHover (e) {
  const canvas = e.target
  const { x, y, width, height } = canvas.getBoundingClientRect()
  const rotation = {
    y: (e.x - (x + width / 2)) / width * 30,
    x: (e.y - (y + height / 2)) / height * -30
  }
  canvas.style.transform = `
    perspective(1000px)
    translateZ(100px)
    rotateX(${rotation.x}deg)
    rotateY(${rotation.y}deg)
  `
}

export function onCardMouseLeave (e) {
  const canvas = e.target
  canvas.style.transform = ''
}
