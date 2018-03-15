import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import DroppableCollection from './DroppableCollection'
import DragableCollection from './DragableCollection'

class InitBattle extends React.Component {
  render () {
    return (
      <div>
        <DragableCollection />
        <DroppableCollection />
      </div>
    )
  }
}
export default DragDropContext(HTML5Backend)(InitBattle)
