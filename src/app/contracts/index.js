import { ContractInterface } from './ContractInterface'
import cardsArtifact from '../../../build/contracts/Cards'
import minterArtifact from '../../../build/contracts/Minter'

export const CardsContract = new ContractInterface(cardsArtifact)
export const MinterContract = new ContractInterface(minterArtifact)
