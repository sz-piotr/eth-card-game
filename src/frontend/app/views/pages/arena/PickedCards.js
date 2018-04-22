import React from 'react'
import { connect } from 'react-redux'

import PickedCard from './PickedCard'

const PickedCards = ({ pickedCards }) =>
  <section className='container'>
    <h1>Selected Cards</h1>
    {pickedCards && <ul className='card-collection'>
      {pickedCards.map((cardId, index) => console.log(cardId) ||
        <li key={cardId || -index}>
          <PickedCard cardId={cardId} index={index} />
        </li>
      )}
    </ul>}
  </section>

export default connect(
  state => ({
    pickedCards: state.pickCards.picked
  })
)(PickedCards)
