import React from 'react'
import { connect } from 'react-redux'

import Paginated from '../../components/pagination/Paginated'
import MarketSearch from './MarketSearch'
import MarketItem from './MarketItem'
import {
  marketPageChanged
} from '../../../state/actions'

const mockData = new Array(400).fill(null)

const Market = ({ data, view, marketPageChanged }) =>
  <section className='container page'>
    <h1 className='page-title'>Market</h1>
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
          {data.map((item, index) => <MarketItem key={index} />)}
        </ul>
      }
    </Paginated>
  </section>

export default connect(
  state => ({
    data: mockData,
    view: state.market.view
  }),
  { marketPageChanged }
)(Market)
