const fs = require('fs')
const path = require('path')
const solc = require('solc')

function readFile (fileName) {
  return fs.readFileSync(path.resolve(__dirname, fileName), 'utf-8')
}

function findImports (fileName) {
  return { contents: readFile(fileName) }
}

const sources = {
  'Counter.sol': readFile('Counter.sol')
}

const output = solc.compile({ sources }, 1, findImports)

const contract = output.contracts['Counter.sol:Counter']
const abi = JSON.stringify(JSON.parse(contract.interface), null, 2) + '\n'

fs.writeFileSync(
  path.resolve(__dirname, '../app/contracts/abi/Counter.json'),
  abi
)
