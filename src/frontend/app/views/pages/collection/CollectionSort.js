import React from 'react'
import { connect } from 'react-redux'
import { cardSortChanged } from '../../../state/actions'
import { Icon } from '../../components/Icon'

const CollectionSort = ({ value, cardSortChanged }) =>
  <div className='collection-sort'>
    <Icon name='collection' />
    <select value={value} onChange={e => cardSortChanged(e.target.value)}>
      <option value='id descending'>
        Newest first
      </option>
      <option value='id ascending'>
        Oldest first
      </option>
      <option value='name ascending'>
        A-Z
      </option>
      <option value='name descending'>
        Z-A
      </option>
    </select>
  </div>

export default connect(
  state => ({ value: state.cards.view.sort }),
  { cardSortChanged }
)(CollectionSort)
