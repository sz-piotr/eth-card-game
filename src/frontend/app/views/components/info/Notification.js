import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Spinner from '../Spinner'
import { notificationDismissed } from '../../../state/actions'

const Notification = ({ id, notificationDismissed, ...notification }) =>
  <li className={classnames(
    'notification',
    notification.spinner && 'notification--has-spinner',
    notification.type === 'success' && 'notification--success',
    notification.type === 'error' && 'notification--error'
  )}>
    {notification.spinner && <Spinner className='notification__spinner' />}
    <button className='close' onClick={() => notificationDismissed(id)}>
      &times;
    </button>
    <p className='notification__title'>{notification.title}</p>
    <p className='notification__description'>{notification.description}</p>
  </li>

export default connect(
  null,
  { notificationDismissed }
)(Notification)
