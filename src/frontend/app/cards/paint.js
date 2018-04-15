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

  fitImage(ctx, cardImage, 30, 60, WIDTH - 60, HEIGHT - 90)

  ctx.font = 'bold 40px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillStyle = 'white'
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 4
  ctx.strokeText(card.displayName, WIDTH / 2, 40)
  ctx.fillText(card.displayName, WIDTH / 2, 40)
}

function fitImage (ctx, image, x, y, width, height) {
  const { naturalWidth, naturalHeight } = image
  const imageRatio = naturalWidth / naturalHeight
  const areaRatio = width / height

  if (imageRatio > areaRatio) {
    const newHeight = width / imageRatio
    const offset = (height - newHeight) / 2
    ctx.drawImage(image, x, y + offset, width, newHeight)
  } else {
    const newWidth = height * imageRatio
    const offset = (width - newWidth) / 2
    ctx.drawImage(image, x + offset, y, newWidth, height)
  }
}
