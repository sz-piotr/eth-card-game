import {
  metamaskLoaded,
  metamaskNotPresent,
  // web3AccountChanged,
  reducer
} from './web3'

describe('web3 reducer', () => {
  it('correcty handles the metamaskLoaded action with unsupported network', () => {
    const state = reducer({}, metamaskLoaded({
      account: '0x123',
      network: 'unsupported'
    }))

    expect(state.canTransact).toBeFalsy()
    expect(state.account).toEqual('0x123')
    expect(state.network).toEqual('unsupported')
    expect(state.metamask.loaded).toBeTruthy()
    expect(state.metamask.installed).toBeTruthy()
    expect(state.metamask.unlocked).toBeTruthy()
  })

  it('correcty handles the metamaskLoaded action with a supported network', () => {
    const state = reducer({}, metamaskLoaded({
      account: '0x123',
      network: '3'
    }))

    expect(state.canTransact).toBeTruthy()
    expect(state.account).toEqual('0x123')
    expect(state.network).toEqual('3')
    expect(state.metamask.loaded).toBeTruthy()
    expect(state.metamask.installed).toBeTruthy()
    expect(state.metamask.unlocked).toBeTruthy()
  })

  it('correcty handles the metamaskLoaded action when its locked', () => {
    const state = reducer({}, metamaskLoaded({
      account: undefined,
      network: '3'
    }))

    expect(state.canTransact).toBeFalsy()
    expect(state.account).toEqual(undefined)
    expect(state.network).toEqual('3')
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

  // TODO: correcty handles the web3AccountChanged action
})
