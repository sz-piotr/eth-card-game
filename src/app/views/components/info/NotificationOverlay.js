import React from 'react'
import { connect } from 'react-redux'

import Notification from './Notification'

const NotificationOverlay = ({ notifications }) =>
  <ul className='notification-overlay'>
    {notifications.map(notification =>
      <Notification key={notification.id} {...notification} />
    )}
  </ul>

export default connect(
  state => ({ notifications: state.notifications.list })
)(NotificationOverlay)
