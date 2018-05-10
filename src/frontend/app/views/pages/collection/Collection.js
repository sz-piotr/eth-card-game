import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { selectCardsToDisplay } from '../../../state/selectors'
import { cardsPageChanged } from '../../../state/actions'
import { fetchingCollection } from './fetchingCollection'
import CollectionPlaceholder from './CollectionPlaceholder'
import CollectionFilter from './CollectionFilter'
import Card from '../../components/cards/Card'
import Paginated from '../../components/pagination/Paginated'
import CollectionSort from './CollectionSort'

const Collection = ({ data, view, cardsPageChanged }) =>
  <section className='container page'>
    <h1 className='page-title'>Collection</h1>
    <div className='input-group'>
      <CollectionFilter />
      <CollectionSort />
    </div>
    {!data && <CollectionPlaceholder />}
    {data &&
      <Paginated data={data} page={view.page}
        itemsPerPage={view.itemsPerPage}
        onChange={page => cardsPageChanged(page)}>
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
      data: selectCardsToDisplay(state),
      view: state.cards.view
    }),
    { cardsPageChanged }
  )
)(Collection)
