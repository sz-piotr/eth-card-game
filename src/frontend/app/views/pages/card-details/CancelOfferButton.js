import React from 'react'
import { connect } from 'react-redux'

import { cancelOfferClicked } from '../../../state/actions'

const CancelOfferButton = ({ cardId, cancelOfferClicked }) =>
  <button
    className='button button--wide'
    onClick={() => cancelOfferClicked(cardId)}
  >
    Cancel market offer
  </button>

export default connect(
  null,
  { cancelOfferClicked }
)(CancelOfferButton)
