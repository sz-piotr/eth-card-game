import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { selectCardsToDisplay } from '../../../state/selectors'
import { fetchingCollection } from './fetchingCollection'
import CollectionPlaceholder from './CollectionPlaceholder'
import CollectionSearch from './CollectionSearch'
import CollectionSort from './CollectionSort'
import CollectionView from './CollectionView'

const Collection = ({ data, view }) =>
  <main className='page'>
    <header className='header'>
      <h1 className='header__title'>Collection</h1>
    </header>
    <div className='input-group'>
      <CollectionSearch />
      <CollectionSort />
    </div>
    {!data && <CollectionPlaceholder />}
    {data && <CollectionView data={data} view={view} />}
  </main>

export default compose(
  fetchingCollection,
  connect(
    state => ({
      data: selectCardsToDisplay(state),
      view: state.cards.view
    })
  )
)(Collection)
