import { cardAttributes } from './cardAttributes'

const DEFAULT_CARD = {
  type: 'error',
  displayName: ''
}

window.cardAttributes = cardAttributes

export function getCardAttributes (cardId) {
  return cardAttributes[cardId] || DEFAULT_CARD
}
