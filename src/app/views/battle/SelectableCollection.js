import React from 'react'
import { connect } from 'react-redux'

import { fetchCollectionRequest, pickCard } from '../../state/actions'
import SelectionPlaceholder from './SelectionPlaceholder'
import SelectableCard from './SelectableCard'
import Card from '../cards/Card'

class SelectableCollection extends React.Component {
  constructor (props) {
    super(props)
    if (props.account) {
      props.fetchCollectionRequest(props.account)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.account !== nextProps.account) {
      this.props.fetchCollectionRequest(nextProps.account)
    }
  }

  render () {
    const { isFetching, data, error } = this.props.collection
    const { pickCard, pickedCards } = this.props
    return (
      <section className='container'>
        <h1>Select Cards</h1>
        {isFetching && !data && <SelectionPlaceholder />}
        {error}
        {data && <ul className='card-collection'>
          {data.map((cardId, index) =>
            <li key={index}>
              {pickedCards.indexOf(cardId) === -1
                ? <SelectableCard cardId={cardId} pickCard={pickCard} />
                : <Card cardClass='picked-card-display' cardId={cardId} />}
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
    collection: state.collection[state.user.account] || {},
    pickedCards: state.pickedCards
  }),
  { fetchCollectionRequest, pickCard }
)(SelectableCollection)
