import React from 'react'
import { connect } from 'react-redux'
import { changeCardSort } from '../../../state/actions'

const CollectionSort = ({ value, changeCardSort }) =>
  <select value={value} onChange={e => changeCardSort(e.target.value)}>
    <option value='id descending'>
      Time descending
    </option>
    <option value='id ascending'>
      Time ascending
    </option>
  </select>

export default connect(
  state => ({ value: state.cards.view.sort }),
  { changeCardSort }
)(CollectionSort)
