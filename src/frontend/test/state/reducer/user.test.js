import { reducer } from '../../../app/state/reducer/user'
import {
  metamaskLoaded,
  metamaskNotFound,
  metamaskAccountChanged
} from '../../../app/state/actions'

const SUPPORTED_NETWORK = '4447'
const UNSUPPORTED_NETWORK = 'unsupported'

describe('user reducer', () => {
  it('correcty handles the metamaskLoaded action with unsupported network', () => {
    const state = reducer({}, metamaskLoaded('0x123', UNSUPPORTED_NETWORK))

    expect(state.canTransact).toBeFalsy()
    expect(state.account).toEqual('0x123')
    expect(state.network).toEqual(UNSUPPORTED_NETWORK)
    expect(state.metamask.loaded).toBeTruthy()
    expect(state.metamask.installed).toBeTruthy()
    expect(state.metamask.unlocked).toBeTruthy()
  })

  it('correcty handles the metamaskLoaded action with supported network', () => {
    const state = reducer({}, metamaskLoaded('0x123', SUPPORTED_NETWORK))

    expect(state.canTransact).toBeTruthy()
    expect(state.account).toEqual('0x123')
    expect(state.network).toEqual(SUPPORTED_NETWORK)
    expect(state.metamask.loaded).toBeTruthy()
    expect(state.metamask.installed).toBeTruthy()
    expect(state.metamask.unlocked).toBeTruthy()
  })

  it('correcty handles the metamaskLoaded action when its locked', () => {
    const state = reducer({}, metamaskLoaded(undefined, SUPPORTED_NETWORK))

    expect(state.canTransact).toBeFalsy()
    expect(state.account).toEqual(undefined)
    expect(state.network).toEqual(SUPPORTED_NETWORK)
    expect(state.metamask.loaded).toBeTruthy()
    expect(state.metamask.installed).toBeTruthy()
    expect(state.metamask.unlocked).toBeFalsy()
  })

  it('correcty handles the metamaskNotFound action', () => {
    const state = reducer({}, metamaskNotFound())
    expect(state.canTransact).toBeFalsy()
    expect(state.metamask.loaded).toBeTruthy()
    expect(state.metamask.installed).toBeFalsy()
  })

  it('correcty handles the metamaskAccountChanged action with unsupported network', () => {
    const state = reducer({ network: 'unsupported' }, metamaskAccountChanged('0x123'))
    expect(state.canTransact).toBeFalsy()
    expect(state.account).toEqual('0x123')
    expect(state.metamask.unlocked).toBeTruthy()
  })

  it('correcty handles the metamaskAccountChanged action with supported network', () => {
    const state = reducer({ network: SUPPORTED_NETWORK }, metamaskAccountChanged('0x123'))
    expect(state.canTransact).toBeTruthy()
    expect(state.account).toEqual('0x123')
    expect(state.metamask.unlocked).toBeTruthy()
  })

  it('correcty handles the metamaskAccountChanged action when account is undefined', () => {
    const state = reducer({ network: UNSUPPORTED_NETWORK }, metamaskAccountChanged(undefined))
    expect(state.canTransact).toBeFalsy()
    expect(state.account).toBe(undefined)
    expect(state.metamask.unlocked).toBeFalsy()
  })
})
