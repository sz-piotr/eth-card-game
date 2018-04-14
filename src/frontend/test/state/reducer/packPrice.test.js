import { reducer } from '../../../app/state/reducer/packPrice'
import {
  fetchPackPriceRequest,
  fetchPackPriceSuccess,
  fetchPackPriceFailure
} from '../../../app/state/actions'

describe('packPrice reducer', () => {
  it('correcty handles the fetchPackPriceRequest action', () => {
    const state = reducer({
      data: 123
    }, fetchPackPriceRequest())

    expect(state).toEqual({
      isFetching: true,
      error: false,
      data: 123
    })
  })

  it('correcty handles the fetchPackPriceSuccess action', () => {
    const state = reducer({}, fetchPackPriceSuccess(123))

    expect(state).toEqual({
      isFetching: false,
      error: false,
      data: 123
    })
  })

  it('correcty handles the fetchPackPriceSuccess action', () => {
    const state = reducer({
      data: 123
    }, fetchPackPriceFailure('Error'))

    expect(state).toEqual({
      isFetching: false,
      error: 'Error',
      data: 123
    })
  })
})
