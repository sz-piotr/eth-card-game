import CardStoreArtifact from '_contracts/CardStore'
import { createContract } from './utils'
import { store } from '../state/store'
import { cardsChanged } from '../state/cardStore'

const contract = createContract(CardStoreArtifact)

export const CardContract = {
  all () {
    return contract.call('getMyCardsId').then(ids =>
      Promise.all(ids.map(id => contract.call('getCardById', id.toString(16))))
    )
  },
  create () {
    return contract.call('createCard')
  }
}

CardContract.all()
  .then(value => store.dispatch(cardsChanged(value)))
