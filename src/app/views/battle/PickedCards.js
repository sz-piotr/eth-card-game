import React from 'react'
import { connect } from 'react-redux'

import { pickCard } from '../../state/actions'
import DroppableCard from './DroppableCard'

const PickedCards = ({ collection }) =>
  <section className='container'>
    <h1>Selected Cards</h1>
    {collection && <ul className='card-collection'>
      {collection.map((cardId, index) =>
        <li key={index}>
          <DroppableCard cardId={cardId} index={index} />
        </li>
      )}
    </ul>}
  </section>

export default connect(
  state => ({
    collection: state.pickedCards
  }),
  { pickCard }
)(PickedCards)
