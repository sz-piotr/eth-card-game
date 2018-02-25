const defaultState = {
  canTransact: false,
  metamask: {
    loaded: false
  }
}

const TRUFFLE_DEVELOP_NETWORK = '4447'

function isSupported (network) {
  return network === TRUFFLE_DEVELOP_NETWORK
}

export function metamaskLoaded ({ account, network }) {
  return {
    type: 'METAMASK_LOADED',
    account,
    network
  }
}

export const metamaskNotPresent = () => ({ type: 'METAMASK_NOT_PRESENT' })

export function web3AccountChanged (account) {
  return {
    type: 'WEB3_ACCOUNT_CHANGED',
    account
  }
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'METAMASK_LOADED':
      return {
        canTransact: action.account && isSupported(action.network),
        account: action.account,
        network: action.network,
        metamask: {
          loaded: true,
          installed: true,
          unlocked: !!action.account
        }
      }
    case 'METAMASK_NOT_PRESENT':
      return {
        canTransact: false,
        metamask: {
          loaded: true,
          installed: false
        }
      }
    case 'WEB3_ACCOUNT_CHANGED':
      return {
        canTransact: action.account && isSupported(state.network),
        network: state.network,
        account: action.account,
        metamask: {
          loaded: true,
          installed: true,
          unlocked: !!action.account
        }
      }
    default:
      return state
  }
}
