import React from 'react'
import { connect } from 'react-redux'
import { CardStoreContract } from '../contracts/CardStoreContract'

const CardStore = ({ cards }) =>
  <section className='container'>
    <h1>Cards</h1>
    {cards.map((card) => <p>Value: {card.toString()}</p>)}
    <button onClick={() => CardStoreContract.createCard()}>
      Create Card
    </button>
  </section>

export default connect(
  state => ({ cards: state.cardStore })
)(CardStore)
