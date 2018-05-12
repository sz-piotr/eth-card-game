import React from 'react'
import CollectionFilter from '../collection/CollectionFilter'
import Paginated from '../../components/pagination/Paginated'
import MarketItem from './MarketItem'

const mockData = new Array(400).fill(null)

const Market = () =>
  <section className='container page'>
    <h1 className='page-title'>Market</h1>
    <CollectionFilter /> {/* TODO: replace with market specific component */}
    <Paginated data={mockData} page={3} itemsPerPage={10} onChange={() => {}}>
      {data =>
        <ul className='market-items'>
          {data.map((item, index) => <MarketItem key={index} />)}
        </ul>
      }
    </Paginated>
  </section>

export default Market
