import React from 'react'
import { connect } from 'react-redux'

import Page from '../../components/Page'
import Paginated from '../../components/pagination/Paginated'
import MarketSearch from './MarketSearch'
import MarketItem from './MarketItem'
import { marketPageChanged } from '../../../state/actions'
import { selectOffersToDisplay } from '../../../state/selectors'

const Market = ({ data, view, marketPageChanged }) =>
  <Page
    title='Market'
    action='Create Offer'
    onAction={console.log}
  >
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
  </Page>

export default connect(
  state => ({
    data: selectOffersToDisplay(state),
    view: state.market.view
  }),
  { marketPageChanged }
)(Market)
