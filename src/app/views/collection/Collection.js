import React from 'react'

import fetchingCollection from './fetchingCollection'
import Card from '../cards/Card'
import CollectionPlaceholder from './CollectionPlaceholder'

class Collection extends React.Component {
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

export default fetchingCollection(Collection)
