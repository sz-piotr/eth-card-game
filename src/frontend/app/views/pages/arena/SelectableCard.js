import React from 'react'
import { connect } from 'react-redux'

import { selectCard } from '../../../state/actions'
import Card from '../../components/cards/Card'

const SelectableCard = ({ selectCard, selectedCard, cardId }) =>
  <Card
    className={selectedCard === cardId && 'card-display--selected'}
    cardId={cardId}
    // TODO: move this logic to reducer
    onClick={() => selectedCard === cardId ? selectCard(null) : selectCard(cardId)}
  />

export default connect(
  state => ({
    selectedCard: state.pickCards.selected
  }), { selectCard }
)(SelectableCard)
