import { createContractInstance, createWeb3Function } from './utils'
import { abi, networks } from '../../../build/contracts/Cards'

const instance = createContractInstance(abi, networks)

export const Cards = {
  // TODO: data immutable, use storage cache?
  getCard: createWeb3Function(instance, 'getCard'),
  tokensOf: createWeb3Function(instance, 'tokensOf')
}
