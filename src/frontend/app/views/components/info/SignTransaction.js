import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Icon from '../Icon'
import {
  signTransactionClosed,
  signTransactionConfirmed
} from '../../../state/actions'

const SignTransactionHeader = ({ onClose }) =>
  <React.Fragment>
    <div className='sign-transaction__title'>Sign Transaction</div>
    <button className='close' onClick={() => onClose()}>&times;</button>
    <div className='alert'>
      <Icon name='warning' />{' '}
      Please review this before proceeding.
    </div>
  </React.Fragment>

const SignTransaction = ({ open, signTransactionClosed, signTransactionConfirmed }) =>
  <React.Fragment>
    <aside className={classnames('sign-transaction', open && 'sign-transaction--open')}>
      <SignTransactionHeader onClose={signTransactionClosed} />
      <p>Actions to be performed:</p>
      <ul>
        <li>Pay 0.01 ETH</li>
        <li>Receive 3 random cards</li>
      </ul>
      <p>Executing the transaction requires <a className='link'>gas</a>.</p>
      <button
        className='button button--wide'
        onClick={() => signTransactionConfirmed()}
      >
        Sign Transaction
      </button>
    </aside>
    <div className='sign-transaction__shadow' onClick={() => signTransactionClosed()} />
  </React.Fragment>

export default connect(
  state => state.signTransaction,
  { signTransactionClosed, signTransactionConfirmed }
)(SignTransaction)
