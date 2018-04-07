import React from 'react'
import { connect } from 'react-redux'

import { fetchCardDetailsRequest } from '../../../state/actions'

import CardDisplay from './CardDisplay'
import CardPlaceholder from './CardPlaceholder'
import CardError from './CardError'

class Card extends React.Component {
  componentDidMount (props) {
    const { cardId, data, isFetching, fetchCardDetailsRequest } = this.props
    if (!data && !isFetching) {
      fetchCardDetailsRequest(cardId)
    }
  }

  render () {
    const { isFetching, data, error, className, onClick } = this.props
    if (isFetching || data == null) {
      return <CardPlaceholder />
    } else if (error) {
      return <CardError />
    } else {
      return <CardDisplay
        className={className}
        data={data}
        onClick={onClick}
      />
    }
  }
}

export default connect(
  (state, props) => state.cards.details[props.cardId] || {},
  { fetchCardDetailsRequest }
)(Card)
