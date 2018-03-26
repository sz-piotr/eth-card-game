import React from 'react'
import { connect } from 'react-redux'

import { fetchCardDetailsRequest } from '../../state/actions'

import CardDisplay from './CardDisplay'
import CardPlaceholder from './CardPlaceholder'
import CardError from './CardError'

class Card extends React.Component {
  constructor (props) {
    super(props)
    if (!props.data && !props.isFetching) {
      props.fetchCardDetailsRequest(props.cardId)
    }
  }

  render () {
    const { isFetching, data, error, cardClass, onClick } = this.props
    if (isFetching) {
      return <CardPlaceholder />
    } else if (error) {
      return <CardError />
    } else {
      return <CardDisplay cardClass={cardClass || 'card-display'} data={data} onClick={onClick} />
    }
  }
}

export default connect(
  (state, props) => state.cards[props.cardId] || {},
  { fetchCardDetailsRequest }
)(Card)
