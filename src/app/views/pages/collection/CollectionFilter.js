import React from 'react'
import { connect } from 'react-redux'

import {
  collectionFilterChangeSearch,
  collectionFilterReset
} from '../../../state/actions'

class CollectionFilter extends React.Component {
  render () {
    const { filter, collectionFilterChangeSearch } = this.props
    return (
      <input className='input'
        placeholder='Search'
        value={filter.search}
        onChange={e => collectionFilterChangeSearch(e.target.value)}
      />
    )
  }

  componentWillUnmount () {
    this.props.collectionFilterReset()
  }
}

export default connect(
  state => ({ filter: state.cards.filter }),
  { collectionFilterChangeSearch, collectionFilterReset }
)(CollectionFilter)
