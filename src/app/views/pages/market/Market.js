import React from 'react'
import CollectionFilter from '../collection/CollectionFilter'
import Paginated from '../../components/pagination/Paginated'
import MarketItem from './MarketItem'

const mockData = new Array(400).fill(null)

const Market = () =>
  <section className='container'>
    <h1>Market</h1>
    <CollectionFilter /> {/* TODO: replace with market specific component */}
    <ul className='market-items'>
      <Paginated data={mockData} page={3} itemsPerPage={10} onChange={() => {}}>
        {data => data.map((item, index) =>
          <MarketItem key={index} />
        )}
      </Paginated>
    </ul>
  </section>

export default Market
