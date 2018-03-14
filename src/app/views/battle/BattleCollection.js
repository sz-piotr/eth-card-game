import React from 'react'
import { connect } from 'react-redux'

import { fetchCollectionRequest } from '../../state/actions'
import SelectionPlaceholder from './SelectionPlaceholder'
import DragableCollection from './DragableCollection'

class BattleCollection extends React.Component {
  constructor (props) {
    super(props)
    if (props.account) {
      props.fetchCollectionRequest(props.account)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.account !== nextProps.account) {
      this.props.fetchCollectionRequest(nextProps.account)
    }
  }

  render () {
    const {isFetching, data, error} = this.props.collection
    return (
      <section className='container'>
        <h1>Select Cards</h1>
        {isFetching && !data && <SelectionPlaceholder />}
        {error}
        {data && <DragableCollection data={data} />}
      </section>
    )
  }
}

export default connect(
  state => ({
    account: state.user.account,
    collection: state.collection[state.user.account] || {}
  }),
  {fetchCollectionRequest}
)(BattleCollection)
