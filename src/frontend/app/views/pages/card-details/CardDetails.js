import React from 'react'
import { connect } from 'react-redux'

import Page from '../../components/Page'
import Card from '../../components/cards/Card'
import CardDetailsInfo from './CardDetailsInfo'
import { cardDetailsFetchRequested } from '../../../state/actions'

class CardDetails extends React.Component {
  componentDidMount () {
    this.componentDidUpdate()
  }

  componentDidUpdate () {
    if (!this.props.data && !this.props.isFetching) {
      this.props.cardDetailsFetchRequested(this.props.match.params.id)
    }
  }

  render () {
    const id = this.props.match.params.id
    return (
      <Page title='Card Details' showBackButton>
        <div className='card-details'>
          <div className='card-details__card'>
            <Card cardId={id} />
          </div>
          <CardDetailsInfo />
        </div>
      </Page>
    )
  }
}

export default connect(
  (state, props) => {
    const id = props.match.params.id
    return state.cards.details[id] || {}
  },
  { cardDetailsFetchRequested }
)(CardDetails)
