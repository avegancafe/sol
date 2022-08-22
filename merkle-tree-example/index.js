const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')

const leaves = ['0x000000000000000000000000000000000000dead'].map(x => keccak256(x))
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
const root = tree.getRoot()
const claimingAddress = keccak256('0x000000000000000000000000000000000000dead')
const proof = tree.getHexProof(claimingAddress)

console.log('Whitelist Merkle Tree:\n', tree.toString())
console.log(`proof: ${JSON.stringify(proof, null, 2)}`)
console.log(`root: ${tree.getHexRoot()}`)

console.log(`Merkle Tree Verification Passed? ${tree.verify(proof, claimingAddress, root)}`) // true
