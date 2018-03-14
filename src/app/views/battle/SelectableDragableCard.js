import React from 'react'

import { DragSource } from 'react-dnd'
import { ItemTypes } from './constants'
import CardDisplay from '../cards/CardDisplay'

const cardSource = {
  beginDrag (props, dnd, element) {
    console.log('props of card, since these aren\'t in the docs')
    console.log(props, dnd, element)
    return {}
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class SelectableDragableCard extends React.Component {
  render () {
    const {connectDragSource} = this.props
    return connectDragSource(<div><CardDisplay {...this.props} /></div>)
  }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(SelectableDragableCard)
