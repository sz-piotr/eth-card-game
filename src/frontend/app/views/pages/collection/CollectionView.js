import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { cardsPageChanged } from '../../../state/actions'
import Card from '../../components/cards/Card'
import Paginated from '../../components/pagination/Paginated'

const CollectionView = ({ data, view, cardsPageChanged }) =>
  <Paginated data={data} page={view.page}
    itemsPerPage={view.itemsPerPage}
    onChange={page => cardsPageChanged(page)}>
    {cards =>
      <ul className='card-collection'>
        {cards.map((cardId, index) =>
          <li key={cardId}>
            <Link to={`collection/card/${cardId}`}>
              <Card cardId={cardId} />
            </Link>
          </li>
        )}
      </ul>
    }
  </Paginated>

export default connect(
  null,
  { cardsPageChanged }
)(CollectionView)
