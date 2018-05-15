import React from 'react'
import classnames from 'classnames'

const Spinner = ({ className }) =>
  <svg
    className={classnames('spinner', className)}
    viewBox='0 0 100 100'
  >
    <circle cx='50' cy='50' r='45' stroke='currentcolor' strokeWidth='5' fill='none' />
  </svg>

export default Spinner
