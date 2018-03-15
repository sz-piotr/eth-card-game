import React from 'react'

import { DropTarget } from 'react-dnd'
import { ItemTypes } from './constants'
import CardDisplay from '../cards/CardDisplay'

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

class DropableCard extends React.Component {
  render () {
    const {connectDropTarget} = this.props
    return connectDropTarget(<div><CardDisplay /></div>)
  }
}

export default DropTarget(ItemTypes.CARD, cardTarget, collect)(DropableCard)
