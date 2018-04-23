import React from 'react'
import { connect } from 'react-redux'
import { cardTypeChanged } from '../../../state/actions'

const CardTypeSort = ({ value, cardTypeChanged }) =>
  <select value={value} onChange={e => cardTypeChanged(e.target.value)}>
    <option value='hero'>
      Hero
    </option>
    <option value='action'>
      Action
    </option>
  </select>

export default connect(
  state => ({ value: state.cards.view.type }),
  { cardTypeChanged }
)(CardTypeSort)
