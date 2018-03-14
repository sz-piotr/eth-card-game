import { makeActionCreator } from './utils'

export const METAMASK_LOADED = 'METAMASK_LOADED'
export const metamaskLoaded = makeActionCreator(METAMASK_LOADED, 'account', 'network')

export const METAMASK_NOT_PRESENT = 'METAMASK_NOT_PRESENT'
export const metamaskNotPresent = makeActionCreator(METAMASK_NOT_PRESENT)

export const ACCOUNT_CHANGED = 'ACCOUNT_CHANGED'
export const accountChanged = makeActionCreator(ACCOUNT_CHANGED, 'account')

// FETCH COLLECTION

export const FETCH_COLLECTION_REQUEST = 'FETCH_COLLECTION_REQUEST'
export const fetchCollectionRequest = makeActionCreator(FETCH_COLLECTION_REQUEST, 'account')

export const FETCH_COLLECTION_SUCCESS = 'FETCH_COLLECTION_SUCCESS'
export const fetchCollectionSuccess = makeActionCreator(FETCH_COLLECTION_SUCCESS, 'account', 'data')

export const FETCH_COLLECTION_FAILURE = 'FETCH_COLLECTION_FAILURE'
export const fetchCollectionFailure = makeActionCreator(FETCH_COLLECTION_FAILURE, 'account', 'error')

// FETCH CARD DETAILS

export const FETCH_CARD_DETAILS_REQUEST = 'FETCH_CARD_DETAILS_REQUEST'
export const fetchCardDetailsRequest = makeActionCreator(FETCH_CARD_DETAILS_REQUEST, 'cardId')

export const FETCH_CARD_DETAILS_SUCCESS = 'FETCH_CARD_DETAILS_SUCCESS'
export const fetchCardDetailsSuccess = makeActionCreator(FETCH_CARD_DETAILS_SUCCESS, 'cardId', 'data')

export const FETCH_CARD_DETAILS_FAILURE = 'FETCH_CARD_DETAILS_FAILURE'
export const fetchCardDetailsFailure = makeActionCreator(FETCH_CARD_DETAILS_FAILURE, 'cardId', 'error')

// FETCH PACK PRICE

export const FETCH_PACK_PRICE_REQUEST = 'FETCH_PACK_PRICE_REQUEST'
export const fetchPackPriceRequest = makeActionCreator(FETCH_PACK_PRICE_REQUEST)

export const FETCH_PACK_PRICE_SUCCESS = 'FETCH_PACK_PRICE_SUCCESS'
export const fetchPackPriceSuccess = makeActionCreator(FETCH_PACK_PRICE_SUCCESS, 'data')

export const FETCH_PACK_PRICE_FAILURE = 'FETCH_PACK_PRICE_FAILURE'
export const fetchPackPriceFailure = makeActionCreator(FETCH_PACK_PRICE_FAILURE, 'error')

// PURCHASE PACK TRANSACTION

export const PURCHASE_PACK_TRANSACTION = 'PURCHASE_PACK_TRANSACTION'
export const purchasePackTransaction = makeActionCreator(PURCHASE_PACK_TRANSACTION)