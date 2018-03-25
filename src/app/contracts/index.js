import { ContractInterface } from './ContractInterface'
import cardsArtifact from '../../../build/contracts/Cards'
import minterArtifact from '../../../build/contracts/Minter'
import marketArtifact from '../../../build/contracts/ERC721Market'

export const CardsContract = new ContractInterface(cardsArtifact)
export const MinterContract = new ContractInterface(minterArtifact)
export const Market = new ContractInterface(marketArtifact)

Market._web3Contract.then(instance => {
  instance.allEvents({ fromBlock: 0 })
    .watch(function (err, result) {
      if (!err) {
        console.log(result)
      }
    })
})
