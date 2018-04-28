import React from 'react'
import { connect } from 'react-redux'

import SelectableCollection from './SelectableCollection'
import PickedCards from './PickedCards'
import { challengeInitialized } from '../../../state/actions'

const InitBattle = ({ ...state, challengeInitialized }) =>
  <div>
    <SelectableCollection />
    <PickedCards />
    <button
      disabled={!canTransact(state)}
      onClick={() => challengeInitialized()}>
      Challenge
    </button>
  </div>

export default connect(
  state => ({
    pickedCards: state.pickCards.picked,
    hero: state.pickCards.hero
  }),
  { challengeInitialized }
)(InitBattle)

function canTransact ({ pickedCards, hero }) {
  return !!hero && pickedCards.every(card => !!card)
}
