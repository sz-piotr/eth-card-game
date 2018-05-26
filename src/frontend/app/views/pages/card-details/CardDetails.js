import React from 'react'
import { connect } from 'react-redux'

import Page from '../../components/Page'
import Card from '../../components/cards/Card'
import CardInfo from './CardInfo'
import { cardDetailsFetchRequested } from '../../../state/actions'

class CardDetails extends React.Component {
  componentDidMount () {
    this.componentDidUpdate()
  }

  componentDidUpdate (prevProps) {
    if (!this.props.details.data && !this.props.details.isFetching) {
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
          <CardInfo cardId={id} />
        </div>
      </Page>
    )
  }
}

export default connect(
  (state, props) => {
    const id = props.match.params.id
    return {
      details: state.cards.details[id] || {}
    }
  },
  { cardDetailsFetchRequested }
)(CardDetails)
