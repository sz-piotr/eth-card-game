import React from 'react'
import Icon from '../Icon'

const SignTransactionHeader = ({ onClose }) =>
  <React.Fragment>
    <div className='sign-transaction__title'>Sign Transaction</div>
    <button className='close' onClick={() => onClose()}>&times;</button>
    <div className='alert'>
      <Icon name='warning' />{' '}
      Please review this before proceeding.
    </div>
  </React.Fragment>

export default SignTransactionHeader
