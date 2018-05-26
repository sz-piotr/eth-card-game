import React from 'react'

const GAS_INFO_LINK = 'https://masterthecrypto.com/ethereum-what-is-gas-gas-limit-gas-price/'

const GasLink = () =>
  <a className='link' href={GAS_INFO_LINK} target='_blank'>gas</a>

const SignTransactionFooter = ({ onConfirm }) =>
  <React.Fragment>
    <p>Executing the transaction requires <GasLink />.</p>
    <button
      className='button button--wide'
      onClick={() => onConfirm()}
    >
      Sign Transaction
    </button>
  </React.Fragment>

export default SignTransactionFooter
