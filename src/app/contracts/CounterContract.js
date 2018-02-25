import CounterArtifact from '_contracts/Counter'
import { createContract } from './utils'
import { store } from '../state/store'
import { counterValueChanged } from '../state/counter'

const contract = createContract(CounterArtifact)

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
