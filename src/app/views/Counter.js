import React from 'react'
import { connect } from 'react-redux'

import { CounterContract } from '../contracts/CounterContract'

const Counter = ({ value }) =>
  <section className='container'>
    <h1>Counter</h1>
    <button onClick={CounterContract.increment}>Increment</button>
    <button onClick={CounterContract.decrement}>Decrement</button>
    {value}
  </section>

export default connect(
  state => ({ value: state })
)(Counter)
