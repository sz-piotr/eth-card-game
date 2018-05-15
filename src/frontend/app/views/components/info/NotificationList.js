import React from 'react'
import { connect } from 'react-redux'

import Notification from './Notification'

const NotificationList = ({ notifications }) =>
  <ul className='notification-list'>
    {notifications.map(notification =>
      <Notification key={notification.id} {...notification} />
    )}
  </ul>

export default connect(
  state => ({ notifications: state.notifications.list })
)(NotificationList)
