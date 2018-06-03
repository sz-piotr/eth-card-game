import * as Web3 from 'web3'

export { Market } from './Market'
export { Minter } from './Minter'
export { Cards } from './Cards'
export { Challenges } from './Challenges'

export { waitForConfirmation } from './utils'

const web3 = new Web3()

export function weiToEth (wei) {
  const eth = web3.toBigNumber(web3.fromWei(wei, 'ether'))
  if (eth.lessThan(0.00001)) {
    return '<0.00001'
  } else {
    return eth
      .round(5)
      .toString()
  }
}

export function ethToWei (eth) {
  return web3.toWei(eth, 'ether')
}

export function toBigNumber (value) {
  return web3.toBigNumber(value)
}
