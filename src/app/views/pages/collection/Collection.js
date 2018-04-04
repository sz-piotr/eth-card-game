import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { selectFilteredCollection } from '../../../state/selectors'
import { fetchingCollection } from './fetchingCollection'
import CollectionPlaceholder from './CollectionPlaceholder'
import CollectionFilter from './CollectionFilter'
import Card from '../../components/cards/Card'

class Collection extends React.Component {
  render () {
    const { isFetching, error } = this.props.collection
    const data = this.props.data
    return (
      <section className='container'>
        <h1>My Cards</h1>
        <CollectionFilter count={data && data.length}>
          {isFetching && !data && <CollectionPlaceholder />}
          {error}
          {data && <ul className='card-collection'>
            {data.map((cardId, index) =>
              <li key={index}>
                <Card cardId={cardId} />
              </li>
            )}
          </ul>}
        </CollectionFilter>
      </section>
    )
  }
}

export default compose(
  fetchingCollection,
  connect(state => ({ data: selectFilteredCollection(state) }))
)(Collection)
