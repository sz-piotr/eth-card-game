import React from 'react'
import { connect } from 'react-redux'

import { fetchCollectionRequest } from '../../state/actions'
import Card from '../cards/Card'
import CollectionPlaceholder from './CollectionPlaceholder'

class Collection extends React.Component {
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
    const { isFetching, data, error } = this.props.collection
    return (
      <section className='container'>
        <h1>My Cards</h1>
        {isFetching && !data && <CollectionPlaceholder />}
        {error}
        {data && <ul className='card-collection'>
          {data.map((cardId, index) =>
            <li key={index}>
              <Card cardId={cardId} />
            </li>
          )}
        </ul>}
      </section>
    )
  }
}

export default connect(
  state => ({
    account: state.user.account,
    collection: state.collection[state.user.account] || {}
  }),
  { fetchCollectionRequest }
)(Collection)
