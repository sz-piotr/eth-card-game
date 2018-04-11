import {
  getResource,
  cardImageUrl
} from './resources'

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
  const image = getResource(cardImageUrl(card))
  ctx.drawImage(image, 0, 0, WIDTH, HEIGHT)

  ctx.font = '52px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillStyle = 'red'
  ctx.fillText(card.displayName, WIDTH / 2, HEIGHT / 8)
}
