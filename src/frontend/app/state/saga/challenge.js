import { takeEvery, call } from 'redux-saga/effects'
import createKeccakHash from 'keccak'

import { Challenges } from '../../contracts'
import {
  CHALLENGE_INITIALIZED
} from '../actions'

function * initChallenge ({ heroId, cardList }) {
  try {
    const salt = yield generateSalt()
    const hash = yield createHash(salt, heroId, cardList)
    yield call(Challenges.challenge, hash)
  } catch (error) {
    console.log(error)
  }
}

export function * saga () {
  yield takeEvery(CHALLENGE_INITIALIZED, initChallenge)
}

function generateSalt () {
  let ints = new Uint32Array(8)
  window.crypto.getRandomValues(ints)
  let nonce = ''
  ints.forEach(int => {
    nonce = nonce + int.toString(36)
  })
  return nonce
}

function createHash (salt, heroId, cardList) {
  let value = '' + heroId
  let i
  for (i = 0; i !== 5; i++) {
    value += cardList[i]
  }
  value += salt
  return '0x' + createKeccakHash('keccak256').update(value).digest().toString('hex')
}
