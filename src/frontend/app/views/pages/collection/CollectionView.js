import React from 'react'
import { connect } from 'react-redux'

import { cardsPageChanged } from '../../../state/actions'
import Card from '../../components/cards/Card'
import Paginated from '../../components/pagination/Paginated'

const CollectionView = ({ data, view }) =>
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

export default connect(
  null,
  { cardsPageChanged }
)(CollectionView)
