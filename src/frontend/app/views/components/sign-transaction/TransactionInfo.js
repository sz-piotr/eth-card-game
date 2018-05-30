import React from 'react'
import Icon from '../Icon'

import TransactionInfoFooter from './TransactionInfoFooter'

const TransactionInfo = ({ title, confirmDisabled, children }) =>
  <React.Fragment>
    <div className='sign-transaction__title'>{title}</div>
    <div className='alert'>
      <Icon name='warning' />{' '}
      Please review this before proceeding.
    </div>
    {children}
    <TransactionInfoFooter confirmDisabled={confirmDisabled} />
  </React.Fragment>

export default TransactionInfo
