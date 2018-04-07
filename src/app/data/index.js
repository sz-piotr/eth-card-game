import { cardAttributes } from './cardAttributes'

const DEFAULT_CARD = {
  type: 'error',
  displayName: ''
}

window.cardAttributes = cardAttributes

export function getCardAttributes (details = []) {
  const cardId = details[0]
  return cardAttributes[cardId] || DEFAULT_CARD
}
