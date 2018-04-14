import { reducer } from '../../../app/state/reducer/pickCards'
import {
  selectCard,
  pickCard
} from '../../../app/state/actions'

describe('pickCards reducer', () => {
  it('should select card', () => {
    const state = reducer({
      picked: [1, 2, null, 4],
      selected: 2
    }, selectCard(3))

    expect(state).toEqual({
      picked: [1, 2, null, 4],
      selected: 3
    })
  })

  it('should unselect card', () => {
    const state = reducer({
      picked: [1, 2, null, 4],
      selected: 2
    }, selectCard(null))

    expect(state).toEqual({
      picked: [1, 2, null, 4],
      selected: null
    })
  })

  it('correcty handles the pickCard action', () => {
    const state = reducer({
      picked: [1, null, null, 5],
      selected: 4
    }, pickCard(2))

    expect(state).toEqual({
      picked: [1, null, 4, 5],
      selected: null
    })
  })
})
