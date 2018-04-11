export const WIDTH = 375
export const HEIGHT = 525

export function createCardDisplay (card, canvas) {
  canvas.width = WIDTH
  canvas.height = HEIGHT
  const ctx = canvas.getContext('2d')

  paint(ctx, card)

  return {
    stopUpdating: () => {}
  }
}

function paint (ctx, card) {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)
}
