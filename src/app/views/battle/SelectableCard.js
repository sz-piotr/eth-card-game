import React from 'react'
import { connect } from 'react-redux'

import { selectCard, unselectCard } from '../../state/actions'
import Card from '../cards/Card'

const SelectableCard = ({ selectCard, unselectCard, selectedCard, cardId }) =>
  <Card cardClass={selectedCard === cardId ? 'selected-card-display' : 'card-display'}
    cardId={cardId} onClick={() => selectedCard === cardId ? unselectCard() : selectCard(cardId)} />

export default connect(
  state => ({
    selectedCard: state.selectedCard
  }), { selectCard, unselectCard }

)(SelectableCard)
