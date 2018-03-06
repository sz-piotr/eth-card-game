import artifact from '../../../build/contracts/Cards'
import { ContractInterface } from './ContractInterface'

import { store } from '../state/store'
import { ownedCardsChanged } from '../state/actions'

export const CardsContract = new ContractInterface(artifact)

export function getCardsFor (account) {
  CardsContract.tokensOf(account)
    .then(cardIds =>
      store.dispatch(ownedCardsChanged(
        account,
        cardIds.map(id => id.toString())
      ))
    )
}
