import React from 'react'
import { connect } from 'react-redux'

import { dismissNotification } from '../../../state/actions'

const Notification = ({ id, title, description, dismissNotification }) =>
  <li className='notification'>
    <button className='notification-close' onClick={() => dismissNotification(id)}>
      &times;
    </button>
    <p className='notification-title'>{title}</p>
    <p className='notification-description'>{description}</p>
  </li>

export default connect(
  null,
  { dismissNotification }
)(Notification)
