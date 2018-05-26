import React from 'react'
import { connect } from 'react-redux'

const OfferSellButton = ({ cardId }) =>
  <button
    className='button button--wide'
    onClick={() => window.alert('Selling ' + cardId)}
  >
    Create market offer
  </button>

export default connect()(OfferSellButton)
