import React from 'react'
import { connect } from 'react-redux'

import Card from '../../components/cards/Card'
import CardPlaceholder from '../../components/cards/CardPlaceholder'
import { cardPicked } from '../../../state/actions'

const PickedCard = ({ cardPicked, cardId, index }) =>
  cardId
    ? <Card cardId={cardId} onClick={() => cardPicked(index)} />
    : <CardPlaceholder onClick={() => cardPicked(index)} />

export default connect(
  state => ({}),
  { cardPicked }
)(PickedCard)
