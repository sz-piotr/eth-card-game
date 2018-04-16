import React from 'react'
import { connect } from 'react-redux'

import { cardSelected } from '../../../state/actions'
import Card from '../../components/cards/Card'

const SelectableCard = ({ cardSelected, selectedCard, cardId }) =>
  <Card
    className={selectedCard === cardId && 'card-display--selected'}
    cardId={cardId}
    // TODO: move this logic to reducer
    onClick={() => selectedCard === cardId ? cardSelected(null) : cardSelected(cardId)}
  />

export default connect(
  state => ({
    selectedCard: state.pickCards.selected
  }), { cardSelected }
)(SelectableCard)
