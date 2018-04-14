import React from 'react'

import SelectableCollection from './SelectableCollection'
import PickedCards from './PickedCards'

class InitBattle extends React.Component {
  render () {
    return (
      <div>
        <SelectableCollection />
        <PickedCards />
      </div>
    )
  }
}
export default InitBattle
