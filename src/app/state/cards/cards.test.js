import { reducer } from './cards'
import { ownedCardsChanged } from '../actions'

describe('cards reducer', () => {
  it('correcty handles the ownedCardsChanged action when empty', () => {
    const state = reducer({}, ownedCardsChanged('0x123', [1, 2, 3]))

    expect(state).toEqual({
      '0x123': [1, 2, 3]
    })
  })

  it('correcty handles the ownedCardsChanged action when empty', () => {
    const initialState = {
      '0x123': [1, 2, 3]
    }

    const state = reducer(initialState, ownedCardsChanged('0x45', [4, 5]))

    expect(state).toEqual({
      '0x123': [1, 2, 3],
      '0x45': [4, 5]
    })
  })
})
