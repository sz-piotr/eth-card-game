import React from 'react'

import { DropTarget } from 'react-dnd'
import { ItemTypes } from './constants'
import Card from '../cards/Card'
import CardPlaceholder from '../cards/CardPlaceholder'

const cardTarget = {

  drop ({index}) {
    return {
      index: index
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class DroppableCard extends React.Component {
  render () {
    const {connectDropTarget, cardId} = this.props
    return cardId < 0
      ? connectDropTarget(<div><CardPlaceholder /></div>)
      : connectDropTarget(<div><Card cardClass='card-display' cardId={cardId} /></div>)
  }
}

export default DropTarget(ItemTypes.CARD, cardTarget, collect)(DroppableCard)
