import * as Web3 from 'web3'

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
