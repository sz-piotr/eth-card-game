import React from 'react'

import Card from '../cards/Card'
import CardPlaceholder from '../cards/CardPlaceholder'

const DroppableCard = ({ connectDropTarget, cardId }) =>
  cardId < 0
    ? <CardPlaceholder />
    : <Card cardClass='card-display' cardId={cardId} />

export default DroppableCard
