import { ContractInterface } from './ContractInterface'
import marketArtifact from '../../../build/contracts/ERC721Market'
import { store } from '../state/store'
import {
  marketOfferCreated,
  marketOfferCanceled,
  marketTokenPurchased
} from '../state/actions'

export const Market = new ContractInterface(marketArtifact)

Market._web3Contract.then(instance => {
  instance.allEvents({ fromBlock: 0 })
    .watch(function (err, data) {
      !err && onMarketEvent(data)
    })
})

function onMarketEvent (data) {
  const at = [data.blockNumber, data.transactionIndex, data.logIndex]
  const args = data.args
  switch (data.event) {
    case 'OfferCreated':
      store.dispatch(marketOfferCreated(
        at,
        args.seller,
        args.tokenId.toString(),
        args.price.toString()
      ))
      break
    case 'OfferCanceled':
      store.dispatch(marketOfferCanceled(
        at,
        args.tokenId.toString()
      ))
      break
    case 'TokenPurchased':
      store.dispatch(marketTokenPurchased(
        at,
        args.tokenId.toString()
      ))
      break
  }
}
