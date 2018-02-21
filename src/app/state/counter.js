export function counterValueChanged (value) {
  return {
    type: 'COUNTER_VALUE_CHANGED',
    value
  }
}

export function reducer (state = null, action) {
  switch (action.type) {
    case 'COUNTER_VALUE_CHANGED':
      return action.value
    default:
      return state
  }
}
