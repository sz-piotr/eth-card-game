import React from 'react'
import { connect } from 'react-redux'

import Page from '../../components/Page'
import { selectCardsToDisplay } from '../../../state/selectors'
import { collectionFetchRequested } from '../../../state/actions'
import CollectionPlaceholder from './CollectionPlaceholder'
import CollectionSearch from './CollectionSearch'
import CollectionSort from './CollectionSort'
import CollectionView from './CollectionView'

class Collection extends React.Component {
  componentDidMount (props) {
    if (this.props.account) {
      this.props.collectionFetchRequested(this.props.account)
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
    const { data, view } = this.props
    return (
      <Page title='Collection'>
        <div className='input-group'>
          <CollectionSearch />
          <CollectionSort />
        </div>
        {!data && <CollectionPlaceholder />}
        {data && <CollectionView data={data} view={view} />}
      </Page>
    )
  }
}

export default connect(
  (state, props) => {
    const account = props.match.params.account || state.user.account
    return {
      account,
      data: selectCardsToDisplay(state, account),
      view: state.cards.view
    }
  },
  { collectionFetchRequested }
)(Collection)
