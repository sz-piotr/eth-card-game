import React from 'react'
import { connect } from 'react-redux'

import { fetchCollectionRequest } from '../../state/actions'

function fetchingCollection (Collection) {
  class FetchingCollection extends React.Component {
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
      return <Collection {...this.props} />
    }
  }

  return connect(
    state => ({
      account: state.user.account,
      collection: state.collection[state.user.account] || {}
    }),
    { fetchCollectionRequest }
  )(FetchingCollection)
}

export default fetchingCollection
