import artifact from '../../../build/contracts/Cards'
import { ContractInterface } from './ContractInterface'

import { store } from '../state/store'
import {
  fetchCollectionRequest,
  fetchCollectionSuccess,
  fetchCollectionFailure,

  fetchCardDetailsRequest,
  fetchCardDetailsSuccess,
  fetchCardDetailsFailure
} from '../state/actions'

export const CardsContract = new ContractInterface(artifact)

export function fetchCollection (account) {
  store.dispatch(fetchCollectionRequest(account))
  CardsContract.tokensOf(account)
    .then(
      cardIds => store.dispatch(fetchCollectionSuccess(
        account,
        cardIds.map(id => id.toString())
      )),
      error => store.dispatch(fetchCollectionFailure(
        account,
        error
      ))
    )
}

export function fetchCardDetails (cardId) {
  store.dispatch(fetchCardDetailsRequest(cardId))
  CardsContract.getCard(cardId)
    .then(
      data => store.dispatch(fetchCardDetailsSuccess(
        cardId,
        data // .map(value => value.toString())
      )),
      error => store.dispatch(fetchCardDetailsFailure(
        cardId,
        error
      ))
    )
}
