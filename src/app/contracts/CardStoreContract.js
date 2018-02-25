import artifact from '_contracts/CardStore'
import { ContractInterface } from './ContractInterface'

import { store } from '../state/store'
import { cardsChanged } from '../state/cardStore'

export const CardStoreContract = new ContractInterface(artifact)

CardStoreContract.getMyCardsId()
  .then(ids => Promise.all(ids.map(
    id => CardStoreContract.getCardById(id.toString(16))
  )))
  .then(value => store.dispatch(cardsChanged(value)))
