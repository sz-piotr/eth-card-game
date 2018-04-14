import {
  getResource,
  cardImageUrl,
  backgroundUrl
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
  const cardImage = getResource(cardImageUrl(card))
  const background = getResource(backgroundUrl(card))
  ctx.drawImage(background, 0, 0, WIDTH, HEIGHT)

  ctx.drawImage(cardImage, 0, 0)

  ctx.font = '52px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillStyle = 'red'
  ctx.fillText(card.displayName, WIDTH / 2, HEIGHT / 8)
}
