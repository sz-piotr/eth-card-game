import React from 'react'
import { connect } from 'react-redux'

import Paginated from '../../components/pagination/Paginated'
import MarketSearch from './MarketSearch'
import MarketItem from './MarketItem'
import { marketPageChanged } from '../../../state/actions'
import { selectOffersToDisplay } from '../../../state/selectors'

const Market = ({ data, view, marketPageChanged }) =>
  <main className='page'>
    <header className='header'>
      <h1 className='header__title'>Market</h1>
      <button className='header__action button'>Create Offer</button>
    </header>
    <div className='input-group'>
      <MarketSearch />
    </div>
    <Paginated
      data={data}
      page={view.page}
      itemsPerPage={view.itemsPerPage}
      onChange={marketPageChanged}
    >
      {data =>
        <ul className='market-items'>
          {data.map((item, index) => <MarketItem key={index} cardId={item} />)}
        </ul>
      }
    </Paginated>
  </main>

export default connect(
  state => ({
    data: selectOffersToDisplay(state),
    view: state.market.view
  }),
  { marketPageChanged }
)(Market)
