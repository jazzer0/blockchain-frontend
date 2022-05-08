import { Blockchain } from './blockchain'

// Primeiro numero dificuldade
// Segundo numero n de blocos
const blockchain = new Blockchain(Number(process.argv[2] || 4))
const blockNumber = Number(process.argv[3]) || 10
let chain = blockchain.chain

for (let i = 1; i <= blockNumber; i++) {
  const block = blockchain.createBlock(`Bloco ${i}`)
  const mineInfo = blockchain.mineBlock(block)
  chain = blockchain.pushBlock(mineInfo.minedBlock)
}

console.log('--- BLOCKCHAIN GERADA ---\n')
console.log(chain)
