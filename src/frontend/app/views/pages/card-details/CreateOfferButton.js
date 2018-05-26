import React from 'react'
import { connect } from 'react-redux'

import { createOfferClicked } from '../../../state/actions'

const CreateOfferButton = ({ cardId, createOfferClicked }) =>
  <button
    className='button button--wide'
    onClick={() => createOfferClicked(cardId)}
  >
    Create market offer
  </button>

export default connect(
  null,
  { createOfferClicked }
)(CreateOfferButton)
