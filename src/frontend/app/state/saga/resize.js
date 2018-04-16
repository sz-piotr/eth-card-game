import { eventChannel } from 'redux-saga'
import { call, take, put } from 'redux-saga/effects'

import { resolutionChanged } from '../actions'

function createResizeChannel () {
  return eventChannel(function (emitter) {
    const onResize = () => emitter({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })

    window.addEventListener('resize', onResize)
    setTimeout(onResize)

    return function unsubscribe () {
      window.removeEventListener('resize', onResize)
    }
  })
}

export function * saga () {
  const resizeChannel = yield call(createResizeChannel)
  while (true) {
    const { width, height } = yield take(resizeChannel)
    yield put(resolutionChanged(width, height))
  }
}
