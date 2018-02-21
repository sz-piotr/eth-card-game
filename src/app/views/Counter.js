import React from 'react'

import { CounterContract } from '../contracts/CounterContract'

const Counter = () =>
  <section className='container'>
    <h1>Counter</h1>
    <button onClick={CounterContract.increment}>Increment</button>
    <button onClick={CounterContract.decrement}>Decrement</button>
  </section>

export default Counter
