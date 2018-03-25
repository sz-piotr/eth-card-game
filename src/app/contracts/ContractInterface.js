import { getWeb3 } from './web3'

export class ContractInterface {
  constructor ({ abi, networks }) {
    this._web3Contract = getWeb3().then(web3 => {
      const address = (networks[web3.version.network] || {}).address
      return web3.eth.contract(abi).at(address)
    })
    this._createInterface(abi)
  }

  _createInterface (abi) {
    for (const entry of abi) {
      if (entry.type === 'function') {
        this._createFunction(entry)
      }
    }
  }

  _createFunction (entry) {
    this[entry.name] = (...args) => this._web3Contract
      .then(instance => callToPromise(instance[entry.name], args))
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
