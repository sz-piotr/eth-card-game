import React from 'react'
import Page from '../../components/Page'

import arenas from '../../../data/arenas.json'

class ArenaLocation extends React.Component {
  render() {
    const id = this.props.match.params.id
    const arena = arenas[id]
    return (
      < Page title={arena.name} >
        <img className='arena-option-image' src={arena.image} />
      </Page >
    )
  }
}


export default ArenaLocation