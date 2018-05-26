import * as Web3 from 'web3'

export { Market } from './Market'
export { Minter } from './Minter'
export { Cards } from './Cards'
export { Challenges } from './Challenges'

export { waitForConfirmation } from './utils'

const web3 = new Web3()

export function weiToEth (wei) {
  return web3.fromWei(wei, 'ether')
}
