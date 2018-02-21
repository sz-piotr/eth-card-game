import abi from './abi/Counter'
import { web3 } from './web3'
import { store } from '../state/store'
import { counterValueChanged } from '../state/counter'

const contract = web3.then(web3 => web3.eth
  .contract(abi)
  .at('0x2df00b2C2E3bE8e8c12704FB578600753401696F') // Ropsten address
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

CounterContract.getValue()
  .then(value => store.dispatch(counterValueChanged(value.toString())))
