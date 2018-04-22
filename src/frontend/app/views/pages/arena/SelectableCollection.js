import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { selectCardsToDisplay } from '../../../state/selectors'
import { cardsPageChanged } from '../../../state/actions'
import { fetchingCollection } from '../collection/fetchingCollection'
import SelectionPlaceholder from './SelectionPlaceholder'
import SelectableCard from './SelectableCard'
import Card from '../../components/cards/Card'
import CollectionFilter from '../collection/CollectionFilter'
import CollectionSort from '../collection/CollectionSort'
import Paginated from '../../components/pagination/Paginated'

const SelectableCollection = ({ data, view, cardsPageChanged, pickedCards }) =>
  <section className='container'>
    <h1>Select Cards</h1>
    <div>
      <CollectionFilter />
      <CollectionSort />
    </div>
    {!data && <SelectionPlaceholder />}
    {data &&
      <Paginated data={data} page={view.page}
        itemsPerPage={view.itemsPerPage}
        onChange={page => cardsPageChanged(page)}>
        {cards =>
          <ul className='card-collection'>
            {cards.map((cardId, index) =>
              <li key={cardId}>
                {pickedCards.indexOf(cardId) === -1
                  ? <SelectableCard cardId={cardId} />
                  : <Card className='card-display--picked' cardId={cardId} />
                }
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
      pickedCards: state.pickCards.picked,
      view: state.cards.view
    }), { cardsPageChanged }
  )
)(SelectableCollection)
