import React from 'react'
import { connect } from 'react-redux'

import { fetchCollectionRequest } from '../../../state/actions'

export function fetchingCollection (Component) {
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
      return <Component {...this.props} />
    }
  }

  return connect(
    state => ({
      account: state.user.account,
      collection: state.cards.byOwner[state.user.account] || {}
    }),
    { fetchCollectionRequest }
  )(FetchingCollection)
}
