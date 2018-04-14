import { toPrimitives } from '../../../app/contracts/utils/toPrimitives'

const nonPrimitive = {
  toString () {
    return 'nonPrimitive'
  }
}

describe('toPrimitives', () => {
  it('does not transform primitives', () => {
    expect(toPrimitives(true)).toBe(true)
    expect(toPrimitives(null)).toBe(null)
    expect(toPrimitives(1234)).toBe(1234)
  })

  it('transforms non-primitives', () => {
    expect(toPrimitives(nonPrimitive)).toBe('nonPrimitive')
  })

  it('transforms arrays recursively', () => {
    expect(toPrimitives([[nonPrimitive]])).toEqual([['nonPrimitive']])
  })
})
