import React from 'react'
import { connect } from 'react-redux'

import { notificationDismissed } from '../../../state/actions'

const Notification = ({ id, title, description, notificationDismissed }) =>
  <li className='notification'>
    <button className='notification__close' onClick={() => notificationDismissed(id)}>
      &times;
    </button>
    <p className='notification__title'>{title}</p>
    <p className='notification__description'>{description}</p>
  </li>

export default connect(
  null,
  { notificationDismissed }
)(Notification)
