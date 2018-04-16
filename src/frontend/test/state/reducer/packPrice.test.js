import { reducer } from '../../../app/state/reducer/packPrice'
import {
  packPriceFetchRequested,
  packPriceFetchSucceded,
  packPriceFetchFailed
} from '../../../app/state/actions'

describe('packPrice reducer', () => {
  it('correcty handles the packPriceFetchRequested action', () => {
    const state = reducer({
      data: 123
    }, packPriceFetchRequested())

    expect(state).toEqual({
      isFetching: true,
      error: false,
      data: 123
    })
  })

  it('correcty handles the packPriceFetchSucceded action', () => {
    const state = reducer({}, packPriceFetchSucceded(123))

    expect(state).toEqual({
      isFetching: false,
      error: false,
      data: 123
    })
  })

  it('correcty handles the packPriceFetchSucceded action', () => {
    const state = reducer({
      data: 123
    }, packPriceFetchFailed('Error'))

    expect(state).toEqual({
      isFetching: false,
      error: 'Error',
      data: 123
    })
  })
})
