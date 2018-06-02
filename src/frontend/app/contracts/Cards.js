import { createContractInstance, createWeb3Function } from './utils'
import { abi, networks } from '../../../../build/contracts/Cards'

// DIRTY HACK
// Basically web3.js handles contract method overloading very poorly.
// We remove an overloaded version of the safeTransferFrom function
// in order to make sure the 4-argument version gets called.
const dirtyHackedAbi = abi.filter(value =>
  value.name !== 'safeTransferFrom' || value.inputs.length !== 3
)

const instance = createContractInstance(dirtyHackedAbi, networks)

export const Cards = {
  // TODO: data immutable, use storage cache?
  getCard: createWeb3Function(instance, 'getCard'),
  ownerOf: createWeb3Function(instance, 'ownerOf'),
  tokensOf: createWeb3Function(instance, 'tokensOf'),
  safeTransferFrom: createWeb3Function(instance, 'safeTransferFrom')
}
