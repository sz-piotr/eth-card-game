import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { selectFilteredCollection } from '../../../state/selectors'
import { collectionFilterChangePage } from '../../../state/actions'
import { fetchingCollection } from './fetchingCollection'
import CollectionPlaceholder from './CollectionPlaceholder'
import CollectionFilter from './CollectionFilter'
import Card from '../../components/cards/Card'
import Paginated from '../../components/pagination/Paginated'

const Collection = ({ data, filter, collectionFilterChangePage }) =>
  <section className='container'>
    <h1>My Cards</h1>
    <CollectionFilter />
    {!data && <CollectionPlaceholder />}
    {data &&
      <Paginated data={data} page={filter.page}
        itemsPerPage={filter.itemsPerPage}
        onChange={page => collectionFilterChangePage(page)}
      >
        {cards =>
          <ul className='card-collection'>
            {cards.map((cardId, index) =>
              <li key={cardId}>
                <Card cardId={cardId} />
              </li>
            )}
          </ul>
        }
      </Paginated>
    }
  </section>

export default compose(
  fetchingCollection,
  connect(
    state => ({
      data: selectFilteredCollection(state),
      filter: state.cards.filter
    }),
    { collectionFilterChangePage }
  )
)(Collection)
