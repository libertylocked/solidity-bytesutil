const BytesUtilMocks = artifacts.require('BytesUtilMock')

module.exports = (deployer, network, accounts) => {
  deployer.deploy(BytesUtilMocks)
}
