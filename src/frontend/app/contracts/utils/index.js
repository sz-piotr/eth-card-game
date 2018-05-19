import { getWeb3 } from './web3'
import { callToPromise } from './callToPromise'
import { toPrimitives } from './toPrimitives'

export { waitForConfirmation } from './waitForConfirmation'

export function createContractInstance (abi, networks) {
  return getWeb3()
    .then(web3 => {
      const address = (networks[web3.version.network] || {}).address
      return web3.eth.contract(abi).at(address)
    })
}

export function createWeb3Function (instance, name) {
  return (...args) => instance.then(instance =>
    callToPromise(instance[name], args)
      .then(toPrimitives)
  )
}
