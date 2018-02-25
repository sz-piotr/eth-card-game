import {
  metamaskLoaded,
  metamaskNotPresent,
  web3AccountChanged,
  reducer
} from './web3'

const SUPPORTED_NETWORK = '4447'
const UNSUPPORTED_NETWORK = 'unsupported'

describe('web3 reducer', () => {
  it('correcty handles the metamaskLoaded action with unsupported network', () => {
    const state = reducer({}, metamaskLoaded({
      account: '0x123',
      network: UNSUPPORTED_NETWORK
    }))

    expect(state.canTransact).toBeFalsy()
    expect(state.account).toEqual('0x123')
    expect(state.network).toEqual(UNSUPPORTED_NETWORK)
    expect(state.metamask.loaded).toBeTruthy()
    expect(state.metamask.installed).toBeTruthy()
    expect(state.metamask.unlocked).toBeTruthy()
  })

  it('correcty handles the metamaskLoaded action with supported network', () => {
    const state = reducer({}, metamaskLoaded({
      account: '0x123',
      network: SUPPORTED_NETWORK
    }))

    expect(state.canTransact).toBeTruthy()
    expect(state.account).toEqual('0x123')
    expect(state.network).toEqual(SUPPORTED_NETWORK)
    expect(state.metamask.loaded).toBeTruthy()
    expect(state.metamask.installed).toBeTruthy()
    expect(state.metamask.unlocked).toBeTruthy()
  })

  it('correcty handles the metamaskLoaded action when its locked', () => {
    const state = reducer({}, metamaskLoaded({
      account: undefined,
      network: SUPPORTED_NETWORK
    }))

    expect(state.canTransact).toBeFalsy()
    expect(state.account).toEqual(undefined)
    expect(state.network).toEqual(SUPPORTED_NETWORK)
    expect(state.metamask.loaded).toBeTruthy()
    expect(state.metamask.installed).toBeTruthy()
    expect(state.metamask.unlocked).toBeFalsy()
  })

  it('correcty handles the metamaskNotPresent action', () => {
    const state = reducer({}, metamaskNotPresent())
    expect(state.canTransact).toBeFalsy()
    expect(state.metamask.loaded).toBeTruthy()
    expect(state.metamask.installed).toBeFalsy()
  })

  it('correcty handles the web3AccountChanged action with unsupported network', () => {
    const state = reducer({ network: 'unsupported' }, web3AccountChanged('0x123'))
    expect(state.canTransact).toBeFalsy()
    expect(state.account).toEqual('0x123')
    expect(state.metamask.unlocked).toBeTruthy()
  })

  it('correcty handles the web3AccountChanged action with supported network', () => {
    const state = reducer({ network: SUPPORTED_NETWORK }, web3AccountChanged('0x123'))
    expect(state.canTransact).toBeTruthy()
    expect(state.account).toEqual('0x123')
    expect(state.metamask.unlocked).toBeTruthy()
  })

  it('correcty handles the web3AccountChanged action when account is undefined', () => {
    const state = reducer({ network: UNSUPPORTED_NETWORK }, web3AccountChanged())
    expect(state.canTransact).toBeFalsy()
    expect(state.account).toBe(undefined)
    expect(state.metamask.unlocked).toBeFalsy()
  })
})
