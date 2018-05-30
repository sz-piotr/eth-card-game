import React from 'react'
import { connect } from 'react-redux'
import { signTransactionConfirmed } from '../../../state/actions'

const GAS_INFO_LINK = 'https://masterthecrypto.com/ethereum-what-is-gas-gas-limit-gas-price/'

const GasLink = () =>
  <a className='link' href={GAS_INFO_LINK} target='_blank'>gas</a>

const SignButton = ({ signTransactionConfirmed, confirmDisabled }) =>
  <div className='sign-transaction__footer'>
    <p>
      Please allow some time for the transaction to be processed by the network
      and for the changes to be reflected in the user interface.
    </p>
    <button
      className='button button--wide'
      onClick={() => signTransactionConfirmed()}
      disabled={confirmDisabled}
    >
      Sign Transaction
    </button>
    <small className='sign-transaction__gasinfo'>
      Executing the transaction requires <GasLink />.
    </small>
  </div>

export default connect(
  null,
  { signTransactionConfirmed }
)(SignButton)
