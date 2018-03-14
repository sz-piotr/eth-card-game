import React from 'react'
import { connect } from 'react-redux'

import { fetchCardDetailsRequest } from '../../state/actions'

import CardPlaceholder from '../cards/CardPlaceholder'
import CardError from '../cards/CardError'
import SelectableDragableCard from './SelectableDragableCard'

class Card extends React.Component {
  constructor (props) {
    super(props)
    if (!props.data && !props.isFetching) {
      props.fetchCardDetailsRequest(props.cardId)
    }
  }

  render () {
    const { isFetching, data, error, moveCard } = this.props
    if (isFetching) {
      return <CardPlaceholder />
    } else if (error) {
      return <CardError />
    } else {
      return <SelectableDragableCard moveCard={moveCard} {...data} />
    }
  }
}

export default connect(
  (state, props) => state.cards[props.cardId] || {},
  { fetchCardDetailsRequest }
)(Card)
