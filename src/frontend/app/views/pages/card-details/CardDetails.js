import React from 'react'

import Page from '../../components/Page'

class CardDetails extends React.Component {
  render () {
    const id = this.props.match.params.id
    return (
      <Page title='Card Details' showBackButton>
        {id}
      </Page>
    )
  }
}

export default CardDetails
