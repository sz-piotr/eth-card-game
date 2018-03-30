import { callToPromise } from '../../../app/contracts/utils/callToPromise'

describe('callToPromise', () => {
  it('calls a callback accepting function and returns a Promise', () => {
    const value = callToPromise(exampleApi, [1, 2])
    expect(value).toBeInstanceOf(Promise)
  })

  it('returned promise will be rejected on error', async () => {
    const value = callToPromise(exampleErrorApi, [])
    expect(value).toBeInstanceOf(Promise)
    await expect(value).rejects.toThrow()
  })
})

function exampleApi (a, b, callback) {
  callback()
}

function exampleErrorApi (callback) {
  callback(new Error())
}
