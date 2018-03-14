import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ title, description }) =>
  <li className='notification'>
    <div>{title}</div>
    {description}
  </li>

const NotificationOverlay = ({ notifications }) =>
  <ul className='notification-overlay'>
    {notifications.map(notification =>
      <Notification key={notification.id} {...notification} />
    )}
  </ul>

export default connect(
  state => ({ notifications: state.notifications.list })
)(NotificationOverlay)
