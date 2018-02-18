import React from 'react'
import { connect } from 'react-redux'

import { CounterContract } from './contracts/CounterContract'

const Counter = ({ value }) =>
  <div>
    <button onClick={CounterContract.increment}>Increment</button>
    <button onClick={CounterContract.decrement}>Decrement</button>
    {value}
  </div>

export default connect(
  state => ({ value: state })
)(Counter)
