const BytesUtilMocks = artifacts.require('BytesUtilMocks')

module.exports = (deployer, network, accounts) => {
  deployer.deploy(BytesUtilMocks)
}
