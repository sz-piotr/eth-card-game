import React from 'react'
import Page from '../../components/Page'

import arenas from '../../../data/arenas.json'
import CardDisplay from '../../components/cards/CardDisplay';
import Icon from '../../components/Icon';

class ArenaLocation extends React.Component {
  render () {
    const id = this.props.match.params.id
    const arena = arenas[id]
    return (
      < Page title={arena.name} >
        <div className='arena-location'>
          <img className='arena-location-image' src={arena.image} />
          <button className='arena-new-challenge'>
            <Icon name='arena' />
          </button>
          <div className='arena-location-opponents'>
            <div className="arena-location-opponents-collection">
              <Icon name='chevron-left' className='arena-location-icon' />
              <CardDisplay data={["1100", "1", "0"]} />
              <CardDisplay data={["1100", "1", "0"]} />
              <CardDisplay data={["1100", "1", "0"]} />
              <Icon name='chevron-right' className='arena-location-icon' />
            </div>
          </div>
        </div>
        {arena.wideDescription}
      </Page >
    )
  }
}

export default ArenaLocation