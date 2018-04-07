import React from 'react'
import { connect } from 'react-redux'

import {
  collectionFilterChange,
  collectionFilterReset
} from '../../../state/actions'

class CollectionFilter extends React.Component {
  render () {
    const { filter, collectionFilterChange } = this.props
    return (
      <input className='input'
        placeholder='Search'
        value={filter.search}
        onChange={e => collectionFilterChange({ search: e.target.value })}
      />
    )
  }

  componentWillUnmount () {
    this.props.collectionFilterReset()
  }
}

export default connect(
  state => ({ filter: state.cards.filter }),
  { collectionFilterChange, collectionFilterReset }
)(CollectionFilter)
