import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import DropableCollection from './DropableCollection'
import DragableCollection from './DragableCollection'

class InitBattle extends React.Component {
  render () {
    return (
      <div>
        <DragableCollection />
        <DropableCollection />
      </div>
    )
  }
}
export default DragDropContext(HTML5Backend)(InitBattle)
