import artifact from '_contracts/Counter'
import { ContractInterface } from './ContractInterface'

import { store } from '../state/store'
import { counterValueChanged } from '../state/counter'

export const CounterContract = new ContractInterface(artifact)

CounterContract.value()
  .then(value => store.dispatch(counterValueChanged(value.toString())))
