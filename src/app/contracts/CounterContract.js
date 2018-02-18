import abi from './abi/Counter'
import { web3 } from './web3'

const contract = web3.then(web3 => web3.eth
  .contract(abi)
  .at('0x74D9f55029b28c6800b1217e8B1e32D212b46Fe5') // Ropsten address
)

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

export const CounterContract = {
  getValue () {
    return contract.then(contract => callToPromise(contract.value, []))
  },
  increment () {
    return contract.then(contract => callToPromise(contract.increment, []))
  },
  decrement () {
    return contract.then(contract => callToPromise(contract.decrement, []))
  }
}
