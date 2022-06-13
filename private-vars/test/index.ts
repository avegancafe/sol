import { expect } from 'chai'
import { ethers } from 'hardhat'
import web3 from 'web3'

describe('ThingWithPrivateVariable', function () {
  it('can still accidentally reveal private variables', async function () {
    const ThingWithPrivateVariable = await ethers.getContractFactory(
      'ThingWithPrivateVariable'
    )
    const thing = await ThingWithPrivateVariable.deploy('Hello, world!')
    await thing.deployed()

    expect(await thing.spillBeans()).to.equal('Hello, world!')

    await thing.setSecret('Hola, mundo!')

    const storageVal = await thing.provider.getStorageAt(thing.address, 0)
    expect(web3.utils.hexToAscii(storageVal).match(/[\w\s,!]*/)?.[0]).to.equal('Hola, mundo!')
  })
})
