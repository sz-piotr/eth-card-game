import { createContractInstance, createWeb3Function } from './utils'
import { abi, networks } from '../../../../build/contracts/Minter'

const instance = createContractInstance(abi, networks)

export const Minter = {
  packPrice: createWeb3Function(instance, 'packPrice'),
  purchasePack: createWeb3Function(instance, 'purchasePack')
}
