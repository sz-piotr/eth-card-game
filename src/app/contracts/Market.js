import { createContractInstance, createWeb3Function } from './utils'
import { abi, networks } from '../../../build/contracts/ERC721Market'

const instance = createContractInstance(abi, networks)

export const Market = {
  createOffer: createWeb3Function(instance, 'createOffer'),
  cancelOffer: createWeb3Function(instance, 'cancelOffer'),
  purchase: createWeb3Function(instance, 'purchase'),
  onEvent (fromBlock, callback) {
    const events = instance.then(instance => instance.allEvents({ fromBlock }))
    events.then(events => events.watch(callback))
    return function unsubscribe () {
      events.then(events => events.stopWatching())
    }
  }
}
