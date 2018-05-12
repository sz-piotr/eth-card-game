import React from 'react'
import { connect } from 'react-redux'

import {
  marketSearchChanged,
  marketViewReset
} from '../../../state/actions'

class MarketSearch extends React.Component {
  render () {
    const { view, marketSearchChanged } = this.props
    return (
      <input className='input'
        placeholder='Search'
        value={view.search}
        onChange={e => marketSearchChanged(e.target.value)}
      />
    )
  }

  componentWillUnmount () {
    this.props.marketViewReset()
  }
}

export default connect(
  state => ({ view: state.market.view }),
  { marketSearchChanged, marketViewReset }
)(MarketSearch)
