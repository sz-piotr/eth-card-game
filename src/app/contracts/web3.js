import * as Web3 from 'web3'
import { store } from '../state/store'
import {
  metamaskLoaded,
  metamaskNotPresent,
  web3AccountChanged
} from '../state/web3'

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

web3.then(
  onWeb3Load,
  () => store.dispatch(metamaskNotPresent())
)

function onWeb3Load (web3) {
  store.dispatch(metamaskLoaded({
    account: web3.eth.defaultAccount,
    network: web3.version.network
  }))

  setInterval(function () {
    const account = web3.eth.accounts[0]
    web3.eth.defaultAccount = account
    if (account !== store.getState().web3.account) {
      store.dispatch(web3AccountChanged(account))
    }
  }, 1000)
}

export { web3 }
