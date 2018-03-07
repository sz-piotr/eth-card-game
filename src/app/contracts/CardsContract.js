import artifact from '../../../build/contracts/Cards'
import { ContractInterface } from './ContractInterface'

import { store } from '../state/store'
import {
  fetchCollectionRequest,
  fetchCollectionSuccess,
  fetchCollectionFailure
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
