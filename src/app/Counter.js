import React from 'react'
import { connect } from 'react-redux'

const Counter = ({ value, increment, decrement }) =>
  <div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    {value}
  </div>

export default connect(
  state => ({ value: state }),
  {
    increment: () => ({ type: 'INCREMENT' }),
    decrement: () => ({ type: 'DECREMENT' })
  }
)(Counter)
