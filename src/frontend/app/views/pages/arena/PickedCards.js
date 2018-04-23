import React from 'react'
import { connect } from 'react-redux'

import PickedCard from './PickedCard'

const PickedCards = ({ pickedCards, hero }) =>
  <section className='container'>
    <h1>Selected Cards</h1>
    {pickedCards && <ul className='card-collection'>
      <PickedCard cardId={hero}/>
      {pickedCards.map((cardId, index) =>
        <li key={cardId || -index}>
          <PickedCard cardId={cardId} index={index} />
        </li>
      )}
    </ul>}
  </section>

export default connect(
  state => ({
    pickedCards: state.pickCards.picked,
    hero: state.pickCards.hero
  })
)(PickedCards)
