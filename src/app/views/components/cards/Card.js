import React from 'react'
import { connect } from 'react-redux'

import CardDisplay from './CardDisplay'
import CardPlaceholder from './CardPlaceholder'

const Card = ({ isFetching, data, className, onClick }) => {
  if (isFetching || data == null) {
    return <CardPlaceholder />
  } else {
    return <CardDisplay
      className={className}
      data={data}
      onClick={onClick}
    />
  }
}

export default connect(
  (state, props) => state.cards.details[props.cardId] || {}
)(Card)
