import React from 'react'

import Icon from '../Icon'

const SignTransaction = (props) =>
  <React.Fragment>
    <aside className='sign-transaction sign-transaction--open'>
      <div className='sign-transaction__title'>Sign Transaction</div>
      <button className='sign-transaction__close'>&times;</button>
      <div className='alert'>
        <Icon name='collection' />{' '}
        Please review this before proceeding.
      </div>
      <p>Actions to be performed:</p>
      <ul>
        <li>Pay 0.01 ETH</li>
        <li>Receive 3 random cards</li>
      </ul>
      <p>Executing the transaction requires <a className='link'>gas</a>.</p>
      <button className='button button__wide'>Sign Transaction</button>
    </aside>
    <div className='sign-transaction__shadow' />
  </React.Fragment>

export default SignTransaction
