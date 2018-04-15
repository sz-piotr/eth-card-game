import React from 'react'
import { connect } from 'react-redux'

import {
  collectionFilterChangeSearch,
  collectionFilterReset
} from '../../../state/actions'

class CollectionFilter extends React.Component {
  render () {
    const { view, collectionFilterChangeSearch } = this.props
    return (
      <input className='input'
        placeholder='Search'
        value={view.search}
        onChange={e => collectionFilterChangeSearch(e.target.value)}
      />
    )
  }

  componentWillUnmount () {
    this.props.collectionFilterReset()
  }
}

export default connect(
  state => ({ view: state.cards.view }),
  { collectionFilterChangeSearch, collectionFilterReset }
)(CollectionFilter)
