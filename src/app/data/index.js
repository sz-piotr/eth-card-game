import { cardAttributes } from './cardAttributes'

const DEFAULT_CARD = {
  type: 'unknown',
  displayName: '',
  searchText: ''
}

window.cardAttributes = cardAttributes

export function getCardAttributes (details = []) {
  const cardId = details[0]
  return cardAttributes[cardId] || DEFAULT_CARD
}
