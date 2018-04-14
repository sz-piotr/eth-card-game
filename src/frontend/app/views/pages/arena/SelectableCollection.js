import React from 'react'
import { connect } from 'react-redux'
import { fetchingCollection } from '../collection/fetchingCollection'
import SelectionPlaceholder from './SelectionPlaceholder'
import SelectableCard from './SelectableCard'
import Card from '../../components/cards/Card'

class SelectableCollection extends React.Component {
  render () {
    const { isFetching, data, error } = this.props.collection
    const { pickedCards } = this.props
    return (
      <section className='container'>
        <h1>Select Cards</h1>
        {isFetching && !data && <SelectionPlaceholder />}
        {error}
        {data &&
          <ul className='card-collection'>
            {data.map((cardId, index) =>
              <li key={index}>
                {pickedCards.indexOf(cardId) === -1
                  ? <SelectableCard cardId={cardId} s />
                  : <Card className='card-display--picked' cardId={cardId} />
                }
              </li>
            )}
          </ul>
        }
      </section>
    )
  }
}

export default connect(
  state => ({
    collection: state.cards.byOwner[state.user.account] || {},
    pickedCards: state.pickCards.picked
  })
)(fetchingCollection(SelectableCollection))
