import { makeActionCreator } from './utils'

/*
NAMING CONVENTION

Action names consist of two parts:

Domain name
  The domain name does not carry any information about what is happening,
  rather it tells us where is it happening.

  Example good domain names:
  METAMASK, COLLECTION, PACK_PRICE, CARD_DETAILS

  Bad domain names (DO NOT USE):
  FETCH_CARD, CHALLENGE_INITIALIZED

Event type
  The event type contains information about what happend but without the
  context. It does so in past tense.

  Example good event types:
  LOADED, FETCH_SUCCEDED, INITIALIZED, RESET

  Bad event types (DO NOT USE):
  ADD, LOAD, SUCCESS, CHANGE
*/

// METAMASK ACTIONS

export const METAMASK_LOADED = 'METAMASK_LOADED'
export const metamaskLoaded = makeActionCreator(METAMASK_LOADED, 'account', 'network')

export const METAMASK_NOT_FOUND = 'METAMASK_NOT_FOUND'
export const metamaskNotFound = makeActionCreator(METAMASK_NOT_FOUND)

export const METAMASK_ACCOUNT_CHANGED = 'METAMASK_ACCOUNT_CHANGED'
export const metamaskAccountChanged = makeActionCreator(METAMASK_ACCOUNT_CHANGED, 'account')

// NOTIFICATIONS

export const NOTIFICATION_CREATED = 'NOTIFICATION_CREATED'
export const notificationCreated = makeActionCreator(NOTIFICATION_CREATED, 'notification')

export const NOTIFICATION_DISMISSED = 'NOTIFICATION_DISMISSED'
export const notificationDismissed = makeActionCreator(NOTIFICATION_DISMISSED, 'id')

// FETCH COLLECTION

export const COLLECTION_FETCH_REQUESTED = 'COLLECTION_FETCH_REQUESTED'
export const collectionFetchRequested = makeActionCreator(COLLECTION_FETCH_REQUESTED, 'account')

export const COLLECTION_FETCH_SUCCEDED = 'COLLECTION_FETCH_SUCCEDED'
export const collectionFetchSucceded = makeActionCreator(COLLECTION_FETCH_SUCCEDED, 'account', 'data')

export const COLLECTION_FETCH_FAILED = 'COLLECTION_FETCH_FAILED'
export const collectionFetchFailed = makeActionCreator(COLLECTION_FETCH_FAILED, 'account', 'error')

// FETCH CARD DETAILS

export const CARD_DETAILS_FETCH_REQUESTED = 'CARD_DETAILS_FETCH_REQUESTED'
export const cardDetailsFetchRequested = makeActionCreator(CARD_DETAILS_FETCH_REQUESTED, 'cardId')

export const CARD_DETAILS_FETCH_SUCCEDED = 'CARD_DETAILS_FETCH_SUCCEDED'
export const cardDetailsFetchSucceded = makeActionCreator(CARD_DETAILS_FETCH_SUCCEDED, 'cardId', 'data')

export const CARD_DETAILS_FETCH_FAILED = 'CARD_DETAILS_FETCH_FAILED'
export const cardDetailsFetchFailed = makeActionCreator(CARD_DETAILS_FETCH_FAILED, 'cardId', 'error')

// FETCH CARD OWNER

export const CARD_OWNER_FETCH_REQUESTED = 'CARD_OWNER_FETCH_REQUESTED'
export const cardOwnerFetchRequested = makeActionCreator(CARD_OWNER_FETCH_REQUESTED, 'cardId')

export const CARD_OWNER_FETCH_SUCCEDED = 'CARD_OWNER_FETCH_SUCCEDED'
export const cardOwnerFetchSucceded = makeActionCreator(CARD_OWNER_FETCH_SUCCEDED, 'cardId', 'owner')

export const CARD_OWNER_FETCH_FAILED = 'CARD_OWNER_FETCH_FAILED'
export const cardOwnerFetchFailed = makeActionCreator(CARD_OWNER_FETCH_FAILED, 'cardId', 'error')

// FETCH PACK PRICE

export const PACK_PRICE_FETCH_REQUESTED = 'PACK_PRICE_FETCH_REQUESTED'
export const packPriceFetchRequested = makeActionCreator(PACK_PRICE_FETCH_REQUESTED)

export const PACK_PRICE_FETCH_SUCCEDED = 'PACK_PRICE_FETCH_SUCCEDED'
export const packPriceFetchSucceded = makeActionCreator(PACK_PRICE_FETCH_SUCCEDED, 'data')

export const PACK_PRICE_FETCH_FAILED = 'PACK_PRICE_FETCH_FAILED'
export const packPriceFetchFailed = makeActionCreator(PACK_PRICE_FETCH_FAILED, 'error')

// PURCHASE PACK TRANSACTION

export const PURCHASE_PACK_CLICKED = 'PURCHASE_PACK_CLICKED'
export const purchasePackClicked = makeActionCreator(PURCHASE_PACK_CLICKED)

// PICK CARD TO CHALLENGE

export const CARD_SELECTED = 'CARD_SELECTED'
export const cardSelected = makeActionCreator(CARD_SELECTED, 'cardId')

export const CARD_PICKED = 'CARD_PICKED'
export const cardPicked = makeActionCreator(CARD_PICKED, 'index')

// CHALLENGE

export const CHALLENGE_INITIALIZED = 'CHALLENGE_INITIALIZED'
export const challengeInitialized = makeActionCreator(CHALLENGE_INITIALIZED)

// MARKET

export const MARKET_OFFER_CREATED = 'MARKET_OFFER_CREATED'
export const marketOfferCreated = makeActionCreator(MARKET_OFFER_CREATED, 'at', 'seller', 'tokenId', 'price')

export const MARKET_OFFER_CANCELED = 'MARKET_OFFER_CANCELED'
export const marketOfferCanceled = makeActionCreator(MARKET_OFFER_CANCELED, 'at', 'tokenId')

export const MARKET_TOKEN_PURCHASED = 'MARKET_TOKEN_PURCHASED'
export const marketTokenPurchased = makeActionCreator(MARKET_TOKEN_PURCHASED, 'at', 'tokenId')

// MARKET VIEW

export const MARKET_SEARCH_CHANGED = 'MARKET_SEARCH_CHANGED'
export const marketSearchChanged = makeActionCreator(MARKET_SEARCH_CHANGED, 'value')

export const MARKET_PAGE_CHANGED = 'MARKET_PAGE_CHANGED'
export const marketPageChanged = makeActionCreator(MARKET_PAGE_CHANGED, 'value')

export const MARKET_VIEW_RESET = 'MARKET_VIEW_RESET'
export const marketViewReset = makeActionCreator(MARKET_VIEW_RESET)

// CARD VIEW

export const CARD_SEARCH_CHANGED = 'CARD_SEARCH_CHANGED'
export const cardSearchChanged = makeActionCreator(CARD_SEARCH_CHANGED, 'value')

export const CARDS_PAGE_CHANGED = 'CARDS_PAGE_CHANGED'
export const cardsPageChanged = makeActionCreator(CARDS_PAGE_CHANGED, 'value')

export const CARD_SORT_CHANGED = 'CARD_SORT_CHANGED'
export const cardSortChanged = makeActionCreator(CARD_SORT_CHANGED, 'sort')

export const CARD_TYPE_CHANGED = 'CARD_TYPE_CHANGED'
export const cardTypeChanged = makeActionCreator(CARD_TYPE_CHANGED, 'value')

export const CARD_VIEW_RESET = 'CARD_VIEW_RESET'
export const cardViewReset = makeActionCreator(CARD_VIEW_RESET)

// RESOLUTION

export const RESOULUTION_CHANGED = 'RESOULUTION_CHANGED'
export const resolutionChanged = makeActionCreator(RESOULUTION_CHANGED, 'width', 'height')

// SIGN_TRANSACTION

export const SIGN_TRANSACTION_OPENED = 'SIGN_TRANSACTION_OPENED'
export const signTransactionOpened = makeActionCreator(SIGN_TRANSACTION_OPENED, 'txType')

export const SIGN_TRANSACTION_CLOSED = 'SIGN_TRANSACTION_CLOSED'
export const signTransactionClosed = makeActionCreator(SIGN_TRANSACTION_CLOSED)

export const SIGN_TRANSACTION_CONFIRMED = 'SIGN_TRANSACTION_CONFIRMED'
export const signTransactionConfirmed = makeActionCreator(SIGN_TRANSACTION_CONFIRMED)
