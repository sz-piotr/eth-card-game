import { makeActionCreator } from './utils'

export const METAMASK_LOADED = 'METAMASK_LOADED'
export const metamaskLoaded = makeActionCreator(METAMASK_LOADED, 'account', 'network')

export const METAMASK_NOT_PRESENT = 'METAMASK_NOT_PRESENT'
export const metamaskNotPresent = makeActionCreator(METAMASK_NOT_PRESENT)

export const ACCOUNT_CHANGED = 'ACCOUNT_CHANGED'
export const accountChanged = makeActionCreator(ACCOUNT_CHANGED, 'account')

// NOTIFICATIONS

export const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION'
export const dismissNotification = makeActionCreator(DISMISS_NOTIFICATION, 'id')

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

// PICK CARD TO CHALLENGE

export const SELECT_CARD = 'SELECT_CARD'
export const selectCard = makeActionCreator(SELECT_CARD, 'cardId')

export const PICK_CARD = 'PICK_CARD'
export const pickCard = makeActionCreator(PICK_CARD, 'index')

// CHALLENGE
export const INIT_CHALLENGE = 'INIT_CHALLENGE'
export const initChallenge = makeActionCreator(INIT_CHALLENGE)

// MARKET

export const MARKET_OFFER_CREATED = 'MARKET_OFFER_CREATED'
export const marketOfferCreated = makeActionCreator(MARKET_OFFER_CREATED, 'at', 'seller', 'tokenId', 'price')

export const MARKET_OFFER_CANCELED = 'MARKET_OFFER_CANCELED'
export const marketOfferCanceled = makeActionCreator(MARKET_OFFER_CANCELED, 'at', 'tokenId')

export const MARKET_TOKEN_PURCHASED = 'MARKET_TOKEN_PURCHASED'
export const marketTokenPurchased = makeActionCreator(MARKET_TOKEN_PURCHASED, 'at', 'tokenId')

// CARD VIEW

export const CARD_SEARCH_CHANGED = 'CARD_SEARCH_CHANGED'
export const cardSearchChanged = makeActionCreator(CARD_SEARCH_CHANGED, 'value')

export const CARDS_PAGE_CHANGED = 'CARDS_PAGE_CHANGED'
export const cardsPageChanged = makeActionCreator(CARDS_PAGE_CHANGED, 'value')

export const CARD_SORT_CHANGED = 'CARD_SORT_CHANGED'
export const cardSortChanged = makeActionCreator(CARD_SORT_CHANGED, 'sort')

export const CARD_VIEW_RESET = 'CARD_VIEW_RESET'
export const cardViewReset = makeActionCreator(CARD_VIEW_RESET)

// RESOLUTION

export const RESOULUTION_CHANGE = 'RESOULUTION_CHANGE'
export const resolutionChange = makeActionCreator(RESOULUTION_CHANGE, 'width', 'height')
