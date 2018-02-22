export function cardsChanged (value) {
  return {
    type: 'CARDS_CHANGED',
    value
  }
}

export function reducer (state = [], action) {
  switch (action.type) {
    case 'CARDS_CHANGED':
      return action.value
    default:
      return state
  }
}
