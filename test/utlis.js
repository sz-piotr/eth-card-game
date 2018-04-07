
exports.getLastCreatedTokenId = async (cards) => {
  const result = await toPromise(cards)
  return result.slice(-1)[0].args._tokenId.toString()
}

function toPromise (instance) {
  return new Promise(function (resolve, reject) {
    instance.allEvents({ fromBlock: 0, toBlock: 'latest' }).get(function (error, data) {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}
