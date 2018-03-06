import * as Web3 from 'web3'
import { store } from '../state/store'
import {
  metamaskLoaded,
  metamaskNotPresent,
  accountChanged
} from '../state/actions'

const web3 = new Promise((resolve, reject) => {
  window.addEventListener('load', function () {
    if (typeof window.web3 !== 'undefined') {
      let web3 = new Web3(window.web3.currentProvider)
      web3.eth.getAccounts(function (error, accounts) {
        web3.eth.defaultAccount = error ? undefined : accounts[0]
        resolve(web3)
      })
    } else {
      reject(new Error('No provider was injected!'))
    }
  })
})

export function getWeb3 () {
  return web3
}

getWeb3().then(onWeb3Load, onWeb3Fail)

function onWeb3Load (web3) {
  store.dispatch(metamaskLoaded(web3.eth.defaultAccount, web3.version.network))

  setInterval(function () {
    const account = web3.eth.accounts[0]
    web3.eth.defaultAccount = account
    if (account !== store.getState().user.account) {
      store.dispatch(accountChanged(account))
    }
  }, 1000)
}

function onWeb3Fail () {
  store.dispatch(metamaskNotPresent())
}
