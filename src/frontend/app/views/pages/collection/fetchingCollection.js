import React from 'react'
import { connect } from 'react-redux'

import { collectionFetchRequested } from '../../../state/actions'

export function fetchingCollection (Component) {
  class FetchingCollection extends React.Component {
    componentDidMount (props) {
      const { account, collectionFetchRequested } = this.props
      if (account) {
        collectionFetchRequested(account)
      }
    }

    componentWillReceiveProps (nextProps) {
      if (
        this.props.account !== nextProps.account &&
        nextProps.account != null
      ) {
        this.props.collectionFetchRequested(nextProps.account)
      }
    }

    render () {
      return <Component {...this.props} />
    }
  }

  return connect(
    state => ({ account: state.user.account }),
    { collectionFetchRequested }
  )(FetchingCollection)
}
