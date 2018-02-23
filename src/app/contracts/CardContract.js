import { createContract } from './utils'
import abi from './abi/CardStore.json'
import { store } from '../state/store'
import { cardsChanged } from '../state/cardStore'

const contract = createContract('CardStore', abi)

export const CardContract = {
  all () {
    return new Promise((resolve, reject) => {
      contract.call('getMyCardsId').then(ids =>
        Promise.all(ids.map(id => contract.call('getCardById', id.toString(16)))).then(resolve, reject))
    })
  },
  create () {
    return contract.call('createCard')
  }
}

CardContract.all()
  .then(value => store.dispatch(cardsChanged(value)))
