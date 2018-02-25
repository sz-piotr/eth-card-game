import { web3 } from './web3'

export function createContract ({ abi, networks }) {
  const web3Contract = web3
    .then(web3 => {
      const address = (networks[web3.version.network] || {}).address
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
