import React from 'react'
import { connect } from 'react-redux'

import Pager from '../pagination/Pager'
import {
  collectionFilterChange,
  collectionFilterReset
} from '../../state/actions'

class CollectionFilter extends React.Component {
  render () {
    const { children, count, filter, collectionFilterChange } = this.props
    const pageCount = (count != null) && Math.max(Math.ceil(count / filter.itemsPerPage), 1)
    const pager = <Pager
      page={filter.page}
      count={pageCount}
      onChange={page => collectionFilterChange({ page })}
    />
    return (
      <React.Fragment>
        <input className='collection-filter'
          value={filter.search}
          onChange={e => collectionFilterChange({ search: e.target.value })}
        />
        {pager}
        {children}
        {pager}
      </React.Fragment>
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
