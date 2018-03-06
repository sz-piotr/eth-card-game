import { makeActionCreator } from './utils'

export const METAMASK_LOADED = 'METAMASK_LOADED'
export const metamaskLoaded = makeActionCreator(METAMASK_LOADED, 'account', 'network')

export const METAMASK_NOT_PRESENT = 'METAMASK_NOT_PRESENT'
export const metamaskNotPresent = makeActionCreator(METAMASK_NOT_PRESENT)

export const ACCOUNT_CHANGED = 'ACCOUNT_CHANGED'
export const accountChanged = makeActionCreator(ACCOUNT_CHANGED, 'account')

export const OWNED_CARDS_CHANGED = 'OWNED_CARDS_CHANGED'
export const ownedCardsChanged = makeActionCreator(OWNED_CARDS_CHANGED, 'account', 'cardIds')
