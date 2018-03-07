import React from 'react'
import { connect } from 'react-redux'

import { fetchCollection } from '../../contracts/CardsContract'
import Card from '../cards/Card'

class Collection extends React.Component {
  constructor (props) {
    super(props)
    if (props.account) {
      fetchCollection(props.account)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.account !== nextProps.account) {
      fetchCollection(nextProps.account)
    }
  }

  render () {
    const { isFetching, data, error } = this.props.collection
    return (
      <section className='container'>
        <h1>My Cards</h1>
        {isFetching && !data && 'Loading...'}
        {error}
        {data && <ul>
          {data.map((cardId, index) =>
            <li key={index}>
              <Card cardId={cardId} />
            </li>
          )}
        </ul>}
      </section>
    )
  }
}

export default connect(
  state => ({
    account: state.user.account,
    collection: state.collection[state.user.account] || {}
  })
)(Collection)
