import React from 'react'
import { connect } from 'react-redux'

import {
  changeCardSearch,
  resetCardView
} from '../../../state/actions'

class CollectionFilter extends React.Component {
  render () {
    const { view, changeCardSearch } = this.props
    return (
      <input className='input'
        placeholder='Search'
        value={view.search}
        onChange={e => changeCardSearch(e.target.value)}
      />
    )
  }

  componentWillUnmount () {
    this.props.resetCardView()
  }
}

export default connect(
  state => ({ view: state.cards.view }),
  { changeCardSearch, resetCardView }
)(CollectionFilter)
