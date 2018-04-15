import { cardAttributes } from './cardAttributes'

const DEFAULT_CARD = {
  type: 'unknown',
  displayName: '',
  searchText: ''
}

window.cardAttributes = cardAttributes

export function getCardAttributes (details = []) {
  const cardNumber = details[0]
  return {
    ...(cardAttributes[cardNumber] || DEFAULT_CARD),
    level: parseInt(details[1])
  }
}
