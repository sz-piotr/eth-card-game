import React from 'react'
import { connect } from 'react-redux'

const Pagination = ({ page, count }) =>
  <div>{page} of {count}</div>

class CollectionFilter extends React.Component {
  render () {
    const { children, count, filter } = this.props
    const pageCount = count && Math.max(Math.ceil(count / filter.itemsPerPage), 1)
    const pagination = <Pagination page={filter.page + 1} count={pageCount} />
    return (
      <React.Fragment>
        <input className='collection-filter' />
        {pagination}
        {children}
        {pagination}
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({ filter: state.cards.filter })
)(CollectionFilter)
