import { createContract, call } from './contractUtils'
import abi from './abi/Counter'
import { store } from '../state/store'
import { counterValueChanged } from '../state/counter'

const contract = createContract(abi, '0x2df00b2C2E3bE8e8c12704FB578600753401696F')

export const CounterContract = {
  getValue () {
    return call(contract, 'value')
  },
  increment () {
    return call(contract, 'increment')
  },
  decrement () {
    return call(contract, 'decrement')
  }
}

CounterContract.getValue()
  .then(value => store.dispatch(counterValueChanged(value.toString())))

contract.then(contract => contract
  .Change({})
  .watch(function (error, event) {
    if (!error) {
      console.log(event)
    }
  })
)
