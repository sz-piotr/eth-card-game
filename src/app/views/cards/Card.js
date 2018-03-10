import React from 'react'
import { connect } from 'react-redux'

import { fetchCardDetailsRequest } from '../../state/actions'

const LoadingCard = () =>
  <div className='card-loading'>Loading...</div>

const ErrorCard = () =>
  <div className='card-error'>Error</div>

const CardDisplay = (props) =>
  <div className='card-display'>{JSON.stringify(props)}</div>

class Card extends React.Component {
  constructor (props) {
    super(props)
    if (!props.data && !props.isFetching) {
      props.fetchCardDetailsRequest(props.cardId)
    }
  }

  render () {
    const { isFetching, data, error } = this.props
    return (
      <div className='card-wrapper'>
        {isFetching && <LoadingCard />}
        {!isFetching && error && <ErrorCard />}
        {data && <CardDisplay {...data} />}
      </div>
    )
  }
}

export default connect(
  (state, props) => state.cards[props.cardId] || {},
  { fetchCardDetailsRequest }
)(Card)
