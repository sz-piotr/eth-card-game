import React from 'react'
import { connect } from 'react-redux'

import Card from '../cards/Card'
import CardPlaceholder from '../cards/CardPlaceholder'
import { pickCard } from '../../state/actions'

const PickedCard = ({ pickCard, cardId, index }) =>
  cardId
    ? <Card cardClass='card-display' cardId={cardId} onClick={() => pickCard(index)} />
    : <CardPlaceholder onClick={() => pickCard(index)} />

export default connect(
  state => ({}),
  { pickCard }
)(PickedCard)
