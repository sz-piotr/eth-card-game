import { createContract } from './utils'
import abi from './abi/CardStore.json'
import { store } from '../state/store'
import {cardsChanged} from '../state/cardStore'

const contract = createContract('CardStore', abi)

export const CardContract = {
  all () {
    return contract.call('getAllCardsId')
  },
  create () {
    return contract.call('createCard')
  }
}

CardContract.all()
  .then(value => store.dispatch(cardsChanged(value)))
