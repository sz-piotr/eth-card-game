import React from 'react'
import {connect} from 'react-redux'
import {CardContract} from '../contracts/CardContract'

const CardStore = ({ cards }) =>
  <section className='container'>
    <h1>Cards</h1>
    {cards.map((card) => <p>Value: {card.toString()}</p>)}
    <button onClick={CardContract.create}>Create Card</button>{' '}
  </section>

export default connect(
  state => ({ cards: state.cardStore })
)(CardStore)
