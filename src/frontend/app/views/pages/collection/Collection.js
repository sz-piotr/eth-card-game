import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { selectCardsToDisplay } from '../../../state/selectors'
import { cardsPageChanged } from '../../../state/actions'
import { fetchingCollection } from './fetchingCollection'
import CollectionPlaceholder from './CollectionPlaceholder'
import CollectionSearch from './CollectionSearch'
import Card from '../../components/cards/Card'
import Paginated from '../../components/pagination/Paginated'
import CollectionSort from './CollectionSort'

const Collection = ({ data, view, cardsPageChanged }) =>
  <main className='page'>
    <header className='header'>
      <h1 className='header__title'>Collection</h1>
    </header>
    <div className='input-group'>
      <CollectionSearch />
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
  </main>

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
