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
      } else if (entry.type === 'event') {
        this._createEvent(entry)
      } else {
        console.error('Unknown type: ' + entry.type)
      }
    }
  }

  _createFunction (entry) {
    this[entry.name] = (...args) => {
      console.log('call ' + entry.name, args)
      return this._web3Contract
        .then(inst => callToPromise(inst[entry.name], args))
    }
  }

  _createEvent (entry) {
    console.log('event', entry)
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
