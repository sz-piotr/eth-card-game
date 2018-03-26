import React from 'react'
import { connect } from 'react-redux'

import PickedCard from './PickedCard'

const PickedCards = ({ pickedCards }) =>
  <section className='container'>
    <h1>Selected Cards</h1>
    {pickedCards && <ul className='card-collection'>
      {pickedCards.map((cardId, index) =>
        <li key={index}>
          <PickedCard cardId={cardId} index={index} />
        </li>
      )}
    </ul>}
  </section>

export default connect(
  state => ({
    pickedCards: state.pickedCards
  })
)(PickedCards)
