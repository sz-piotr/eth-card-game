import React from 'react'
import { connect } from 'react-redux'

import { selectCard } from '../../state/actions'
import Card from '../cards/Card'

const SelectableCard = ({ selectCard, selectedCard, cardId }) =>
  <Card cardClass={selectedCard === cardId ? 'selected-card-display' : 'card-display'}
    cardId={cardId} onClick={() => selectCard(cardId)} sele />

export default connect(
  state => ({
    selectedCard: state.selectedCard
  }), { selectCard }

)(SelectableCard)
