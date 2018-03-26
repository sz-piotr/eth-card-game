import React from 'react'
import { connect } from 'react-redux'

import Card from '../cards/Card'
import CardPlaceholder from '../cards/CardPlaceholder'
import { pickCard, unpickCard } from '../../state/actions'

class PickedCard extends React.Component {
  onCardClick () {
    const { pickCard, unpickCard, selectedCard, cardId, index } = this.props
    if (selectedCard > -1) {
      pickCard(selectedCard, index)
    } else {
      unpickCard(cardId)
    }
  }

  render () {
    const { pickCard, selectedCard, cardId, index } = this.props
    return (cardId < 0
      ? <CardPlaceholder onClick={() => pickCard(selectedCard, index)} />
      : <Card cardClass='card-display' cardId={cardId}
        onClick={() => this.onCardClick(selectedCard)} />)
  }
}

export default connect(
  state => ({
    selectedCard: state.selectedCard
  }), { pickCard, unpickCard }
)(PickedCard)
