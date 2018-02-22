import { createContract } from './utils'
import abi from './abi/Counter'
import { store } from '../state/store'
import { counterValueChanged } from '../state/counter'

const contract = createContract('Counter', abi)

export const CounterContract = {
  getValue () {
    return contract.call('value')
  },
  increment () {
    return contract.call('increment')
  },
  decrement () {
    return contract.call('decrement')
  }
}

CounterContract.getValue()
  .then(value => store.dispatch(counterValueChanged(value.toString())))

contract.getWeb3Contract().then(inst => inst
  .Change({})
  .watch(function (error, event) {
    if (!error) {
      console.log(event)
    }
  })
)
