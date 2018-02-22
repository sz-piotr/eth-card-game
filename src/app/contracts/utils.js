import { web3 } from './web3'
import ropstenAddresses from './addresses/ropsten.json'

const ROPSTEN_NETWORK_ID = 3

const addresses = {
  [ROPSTEN_NETWORK_ID]: ropstenAddresses
}

export function createContract (name, abi) {
  const web3Contract = web3
    .then(web3 => {
      const address = addresses[web3.version.network][name]
      return web3.eth
        .contract(abi)
        .at(address)
    })

  return {
    call (method, args = []) {
      return web3Contract.then(inst => callToPromise(inst[method], args))
    },
    getWeb3Contract () {
      return web3Contract
    }
  }
}

function callToPromise (fn, args) {
  return new Promise(function (resolve, reject) {
    fn(...args, function (error, data) {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}
