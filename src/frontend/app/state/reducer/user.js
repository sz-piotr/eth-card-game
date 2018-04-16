import {
  METAMASK_LOADED,
  METAMASK_NOT_FOUND,
  METAMASK_ACCOUNT_CHANGED
} from '../actions'

const defaultState = {
  canTransact: false,
  metamask: {
    loaded: false
  }
}

export function reducer (state = defaultState, action) {
  switch (action.type) {
    case METAMASK_LOADED:
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
    case METAMASK_NOT_FOUND:
      return {
        canTransact: false,
        metamask: {
          loaded: true,
          installed: false
        }
      }
    case METAMASK_ACCOUNT_CHANGED:
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

const TRUFFLE_DEVELOP_NETWORK = '4447'
function isSupported (network) {
  return network === TRUFFLE_DEVELOP_NETWORK
}
