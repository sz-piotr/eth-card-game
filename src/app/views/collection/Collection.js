import React from 'react'

import { fetchingCollection } from './fetchingCollection'
import Card from '../cards/Card'
import CollectionPlaceholder from './CollectionPlaceholder'
import CollectionFilter from './CollectionFilter'

class Collection extends React.Component {
  render () {
    const { isFetching, data, error } = this.props.collection
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

export default fetchingCollection(Collection)
