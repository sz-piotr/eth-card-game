import React from 'react'
import { connect } from 'react-redux'

import { CounterContract } from '../contracts/CounterContract'

const Counter = ({ value }) =>
  <section className='container'>
    <h1>Counter</h1>
    <p>Value: <code>{value !== null ? value : '...'}</code></p>
    <button onClick={() => CounterContract.increment()}>Increment</button>{' '}
    <button onClick={() => CounterContract.decrement()}>Decrement</button>
  </section>

export default connect(
  state => ({ value: state.counter })
)(Counter)
