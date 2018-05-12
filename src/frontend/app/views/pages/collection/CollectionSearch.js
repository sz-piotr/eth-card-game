import React from 'react'
import { connect } from 'react-redux'

import {
  cardSearchChanged,
  cardViewReset
} from '../../../state/actions'

class CollectionSearch extends React.Component {
  render () {
    const { view, cardSearchChanged } = this.props
    return (
      <input className='input'
        placeholder='Search'
        value={view.search}
        onChange={e => cardSearchChanged(e.target.value)}
      />
    )
  }

  componentWillUnmount () {
    this.props.cardViewReset()
  }
}

export default connect(
  state => ({ view: state.cards.view }),
  { cardSearchChanged, cardViewReset }
)(CollectionSearch)
