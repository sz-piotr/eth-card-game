import React from 'react'
import { connect } from 'react-redux'

import CardPlaceholder from '../../components/cards/CardPlaceholder'
import PagerPlaceholder from '../../components/pagination/PagerPlaceholder'

const CollectionPlaceholder = ({ items }) =>
  <React.Fragment>
    <PagerPlaceholder />
    <ul className='card-collection'>
      {new Array(8).fill(0).map((item, index) =>
        <li key={index}><CardPlaceholder /></li>
      )}
    </ul>
    <PagerPlaceholder />
  </React.Fragment>

export default connect(
  state => ({ items: state.cards.filter.itemsPerPage })
)(CollectionPlaceholder)
