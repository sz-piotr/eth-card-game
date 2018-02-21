import React from 'react'
import { connect } from 'react-redux'

const AlertBar = ({ message }) => message &&
  <div className='alertbar'>
    <div className='container'>
      {message}
    </div>
  </div>

const METAMASK_NOT_INSTALLED = <React.Fragment>
  Metamask is not installed and you cannot make transactions.
  Install Metamask{' '}
  <a href='https://metamask.io/' className='link' target='_blank'>here</a>.
</React.Fragment>

const METAMASK_LOCKED = 'Your Metamask is locked. Unlock it to make transactions.'

const METAMASK_WRONG_NETWORK = <React.Fragment>
  Please set the network in Metamask to <strong>Ropsten Test Network</strong>.
</React.Fragment>

function getAlertMessage ({ canTransact, metamask }) {
  if (metamask.loaded) {
    if (!metamask.installed) {
      return METAMASK_NOT_INSTALLED
    } else if (!metamask.unlocked) {
      return METAMASK_LOCKED
    } else if (!canTransact) {
      return METAMASK_WRONG_NETWORK
    }
  }
}

export default connect(
  state => ({ message: getAlertMessage(state.web3) || null })
)(AlertBar)
