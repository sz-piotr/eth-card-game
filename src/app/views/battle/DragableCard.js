import React from 'react'

import { DragSource } from 'react-dnd'
import { ItemTypes } from './constants'
import Card from '../cards/Card'

const cardSource = {
  beginDrag ({cardId}) {
    return {
      cardId: cardId
    }
  },

  endDrag ({cardId, pickCard}, monitor) {
    const dropResult = monitor.getDropResult()
    dropResult && pickCard(cardId, dropResult.index)
  }

}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class DragableCard extends React.Component {
  render () {
    const {connectDragSource, isDragging, cardId} = this.props
    const cardClass = isDragging ? 'dragging-card-display' : 'card-display'
    return connectDragSource(<div><Card cardClass={cardClass} cardId={cardId} /></div>)
  }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(DragableCard)
