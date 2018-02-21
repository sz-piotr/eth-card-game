import { web3 } from './web3'

export function createContract (abi, address) {
  return web3.then(web3 => web3.eth
    .contract(abi)
    .at(address)
  )
}

export function callToPromise (fn, args) {
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

export function call (contract, method, args = []) {
  return contract.then(contract => callToPromise(contract[method], args))
}
