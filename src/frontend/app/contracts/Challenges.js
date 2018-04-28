import { createContractInstance, createWeb3Function } from './utils'
import { abi, networks } from '../../../../build/contracts/Cards'

const instance = createContractInstance(abi, networks)

export const Challenges = {
  challenge: createWeb3Function(instance, 'challenge')
}
