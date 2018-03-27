import React from 'react'
import { connect } from 'react-redux'

import { selectCard } from '../../state/actions'
import Card from '../cards/Card'

const SelectableCard = ({ selectCard, selectedCard, cardId }) =>
  <Card className={selectedCard === cardId ? 'selected-card-display' : 'card-display'}
    cardId={cardId} onClick={() => selectedCard === cardId ? selectCard(null) : selectCard(cardId)} />

export default connect(
  state => ({
    selectedCard: state.pickCards.selected
  }), { selectCard }
)(SelectableCard)
