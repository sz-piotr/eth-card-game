import React from 'react'
import { connect } from 'react-redux'

const AlertBar = ({ message }) => message &&
  <div className='alertbar'>
    <div className='container'>
      {message}
    </div>
  </div>

export default connect(
  state => ({ message: getAlertMessage(state.user) || null })
)(AlertBar)

function getAlertMessage ({ canTransact, metamask }) {
  if (metamask.loaded) {
    if (!metamask.installed) {
      return METAMASK_INSTALL_MESSAGE
    } else if (!metamask.unlocked) {
      return 'Your Metamask is locked. Unlock it to make transactions.'
    } else if (!canTransact) {
      return 'Please set the network in Metamask to truffle develop (http://localhost:9545)'
    }
  }
}

const METAMASK_INSTALL_MESSAGE =
  <React.Fragment>
    Metamask is not installed and you cannot make transactions.
    Install Metamask{' '}
    <a href='https://metamask.io/' className='link' target='_blank'>here</a>.
  </React.Fragment>
