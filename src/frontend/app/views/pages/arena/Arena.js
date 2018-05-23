import React from 'react'

import Page from '../../components/Page'
import ArenaLinks from './ArenaLinks'
import ArenaSelection from './ArenaSelection'

const Arena = (props) =>
  <Page title='Arena'>
    <ArenaLinks />
    <ArenaSelection />
  </Page>

export default Arena
