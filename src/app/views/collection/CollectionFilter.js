import React from 'react'
import { connect } from 'react-redux'
import {
  collectionFilterChange,
  collectionFilterReset
} from '../../state/actions'

const Pagination = ({ page, count }) =>
  <div>{page} of {count}</div>

class CollectionFilter extends React.Component {
  render () {
    const { children, count, filter, collectionFilterChange } = this.props
    const pageCount = count && Math.max(Math.ceil(count / filter.itemsPerPage), 1)
    const pagination = <Pagination page={filter.page + 1} count={pageCount} />
    return (
      <React.Fragment>
        <input className='collection-filter'
          value={filter.search}
          onChange={e => collectionFilterChange({ search: e.target.value })}
        />
        {pagination}
        {children}
        {pagination}
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
