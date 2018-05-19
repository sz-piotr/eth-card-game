import { getWeb3 } from './web3'

const MAX_ATTEMPTS = 240
const INTERVAL = 1000

export function waitForConfirmation (txHash) {
  return getWeb3()
    .then(web3 => doWaitForConfirmation(web3, txHash))
}

function doWaitForConfirmation (web3, txHash) {
  return new Promise((resolve, reject) => {
    let attempts = 0

    check()
    function check () {
      web3.eth.getTransactionReceipt(txHash, function (err, result) {
        if (!err && result != null) { // swallow error
          if (isSuccessful(result.status)) {
            resolve(result)
          } else {
            reject(new Error('Transaction failed: ' + JSON.stringify(result)))
          }
        } else {
          attempts += 1
          if (attempts === MAX_ATTEMPTS) {
            reject(new Error('Confirmation check timed out'))
          } else {
            setTimeout(check, INTERVAL)
          }
        }
      })
    }
  })
}

function isSuccessful (status) {
  return status === '0x1' ||
    status === '0x01'
}
