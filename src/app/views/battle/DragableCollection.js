import React from 'react'
import { connect } from 'react-redux'

import { moveCard } from '../../state/actions'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import BattleCard from './BattleCard'

class DragableCollection extends React.Component {
  moveCard (x, y) {
    console.log(x, y)
    this.props.moveCard(x, y)
  }

  render () {
    const {data} = this.props
    return (
      <section className='container'>
        {data && <ul className='card-collection'>
          {data.map((cardId, index) =>
            <li key={index}>
              <BattleCard
                moveCard={this.moveCard}
                cardId={cardId} />
            </li>
          )}
        </ul>}
      </section>
    )
  }
}

const collection = DragDropContext(HTML5Backend)(DragableCollection)

export default connect(
  state => state,
  {moveCard}
)(collection)
