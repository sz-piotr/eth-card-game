import React from 'react'
import { connect } from 'react-redux'

import { fetchCollectionRequest } from '../../../state/actions'

export function fetchingCollection (Component) {
  class FetchingCollection extends React.Component {
    componentDidMount (props) {
      const { account, fetchCollectionRequest } = this.props
      if (account) {
        fetchCollectionRequest(account)
      }
    }

    componentWillReceiveProps (nextProps) {
      if (
        this.props.account !== nextProps.account &&
        nextProps.account != null
      ) {
        this.props.fetchCollectionRequest(nextProps.account)
      }
    }

    render () {
      return <Component {...this.props} />
    }
  }

  return connect(
    state => ({ account: state.user.account }),
    { fetchCollectionRequest }
  )(FetchingCollection)
}
