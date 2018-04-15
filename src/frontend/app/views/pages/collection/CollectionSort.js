import React from 'react'
import { connect } from 'react-redux'
import { collectionFilterChangeSort } from '../../../state/actions'

const CollectionSort = ({ value, collectionFilterChangeSort }) =>
  <select value={value} onChange={e => collectionFilterChangeSort(e.target.value)}>
    <option value='id descending'>
      Time descending
    </option>
    <option value='id ascending'>
      Time ascending
    </option>
  </select>

export default connect(
  state => ({ value: state.cards.view.sort }),
  { collectionFilterChangeSort }
)(CollectionSort)
