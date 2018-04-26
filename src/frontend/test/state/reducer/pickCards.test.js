import { reducer } from '../../../app/state/reducer/pickCards'
import {
  cardSelected,
  cardPicked,
  cardTypeChanged
} from '../../../app/state/actions'

describe('pickCards reducer', () => {
  it('should select card', () => {
    const state = reducer({
      hero: null,
      picked: [1, 2, null, 4],
      selected: 2,
      selectedType: 'action'
    }, cardSelected(3))

    expect(state).toEqual({
      hero: null,
      picked: [1, 2, null, 4],
      selected: 3,
      selectedType: 'action'
    })
  })

  it('should unselect card', () => {
    const state = reducer({
      hero: null,
      picked: [1, 2, null, 4],
      selected: 2,
      selectedType: 'action'
    }, cardSelected(null))

    expect(state).toEqual({
      hero: null,
      picked: [1, 2, null, 4],
      selected: null,
      selectedType: 'action'
    })
  })

  it('correcty handles the cardPicked action', () => {
    const state = reducer({
      hero: null,
      picked: [1, null, null, 5],
      selected: 4,
      selectedType: 'action'
    }, cardPicked(2))

    expect(state).toEqual({
      hero: null,
      picked: [1, null, 4, 5],
      selected: null,
      selectedType: 'action'
    })
  })

  it('correcty handles the cardTypeChanged action', () => {
    const state = reducer({
      hero: null,
      picked: [1, 2, null, 4],
      selected: 4,
      selectedType: null
    }, cardTypeChanged('hero'))

    expect(state).toEqual({
      hero: null,
      picked: [1, 2, null, 4],
      selected: null,
      selectedType: 'hero'
    })
  })

  it('should pick hero', () => {
    const state = reducer({
      hero: null,
      picked: [1, 2, null, 4],
      selected: 4,
      selectedType: 'hero'
    }, cardPicked(null))

    expect(state).toEqual({
      hero: 4,
      picked: [1, 2, null, 4],
      selected: null,
      selectedType: 'hero'
    })
  })
})
