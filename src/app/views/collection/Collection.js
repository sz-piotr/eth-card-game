import React from 'react'
import { connect } from 'react-redux'

import { getCardsFor } from '../../contracts/CardsContract'

class Collection extends React.Component {
  componentWillReceiveProps (nextProps) {
    if (this.props.account !== nextProps.account) {
      getCardsFor(nextProps.account)
    }
  }

  render () {
    const { cards } = this.props
    return (
      <section className='container'>
        <h1>My Cards</h1>
        <ul>
          {cards.map((cardId, index) => <li key={index}>{cardId}</li>)}
        </ul>
      </section>
    )
  }
}

export default connect(
  state => ({
    account: state.user.account,
    cards: state.cards[state.user.account] || []
  })
)(Collection)
