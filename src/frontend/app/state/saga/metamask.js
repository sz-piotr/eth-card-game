import { eventChannel } from 'redux-saga'
import { call, take, put } from 'redux-saga/effects'

import { getWeb3 } from '../../contracts/utils/web3'
import {
  metamaskLoaded,
  metamaskNotPresent,
  accountChanged
} from '../actions'

export function * saga () {
  try {
    const web3 = yield call(getWeb3)
    yield put(metamaskLoaded(web3.eth.defaultAccount, web3.version.network))
    yield * listenForAccountChanges(web3)
  } catch (e) {
    yield put(metamaskNotPresent())
  }
}

function * listenForAccountChanges (web3) {
  const accountChannel = yield call(createAccountChannel, web3)
  while (true) {
    const { account } = yield take(accountChannel)
    yield put(accountChanged(account))
  }
}

function createAccountChannel (web3) {
  return eventChannel(function (emitter) {
    let previousAccount = web3.eth.accounts[0]

    const interval = setInterval(function () {
      const account = web3.eth.accounts[0]
      if (account !== previousAccount) {
        previousAccount = account
        web3.eth.defaultAccount = account
        emitter({ account }) // must be wrapped to not be undefined
      }
    }, 1000)

    return function unsubscribe () {
      clearInterval(interval)
    }
  })
}
