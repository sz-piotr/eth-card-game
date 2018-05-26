import React from 'react'
import { connect } from 'react-redux'

const OfferCancelButton = ({ cardId }) =>
  <button
    className='button button--wide'
    onClick={() => window.alert('Cancel ' + cardId)}
  >
    Cancel market offer
  </button>

export default connect()(OfferCancelButton)
