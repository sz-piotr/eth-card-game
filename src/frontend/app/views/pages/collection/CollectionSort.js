import React from 'react'
import { connect } from 'react-redux'
import { cardSortChanged } from '../../../state/actions'

const CollectionSort = ({ value, cardSortChanged }) =>
  <select value={value} onChange={e => cardSortChanged(e.target.value)}>
    <option value='id descending'>
      Time descending
    </option>
    <option value='id ascending'>
      Time ascending
    </option>
    <option value='name ascending'>
      A-Z
    </option>
    <option value='name descending'>
      Z-A
    </option>
  </select>

export default connect(
  state => ({ value: state.cards.view.sort }),
  { cardSortChanged }
)(CollectionSort)
