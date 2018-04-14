import React from 'react'
import { connect } from 'react-redux'

import Card from '../../components/cards/Card'
import CardPlaceholder from '../../components/cards/CardPlaceholder'
import { pickCard } from '../../../state/actions'

const PickedCard = ({ pickCard, cardId, index }) =>
  cardId
    ? <Card cardId={cardId} onClick={() => pickCard(index)} />
    : <CardPlaceholder onClick={() => pickCard(index)} />

export default connect(
  state => ({}),
  { pickCard }
)(PickedCard)
