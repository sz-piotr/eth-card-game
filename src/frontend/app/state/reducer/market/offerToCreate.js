import {
  CREATE_OFFER_CLICKED
} from '../../actions'

export function reducer (state = null, action) {
  switch (action.type) {
    case CREATE_OFFER_CLICKED:
      return action.cardId
    default:
      return state
  }
}
