import React from 'react'
import { connect } from 'react-redux'

import { pickCard } from '../../state/actions'
import DropableCard from './DropableCard'

class DropableCollection extends React.Component {
  render () {
    const {collection} = this.props
    return (
      <section className='container'>
        <h1>Selected Cards</h1>
        {collection && <ul className='card-collection'>
          {collection.map((cardId, index) =>
            <li key={index}>
              <DropableCard cardId={cardId} index={index} />
            </li>
          )}
        </ul>}
      </section>
    )
  }
}

export default connect(
  state => ({
    collection: state.pickedCards
  }),
  {pickCard}
)(DropableCollection)
