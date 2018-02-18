import * as Web3 from 'web3'

const web3 = new Promise(resolve => {
  window.addEventListener('load', function () {
    let web3
    if (typeof window.web3 !== 'undefined') {
      web3 = new Web3(window.web3.currentProvider)
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
    }
    web3.eth.defaultAccount = web3.eth.accounts[0]
    resolve(web3)
  })
})

export { web3 }
