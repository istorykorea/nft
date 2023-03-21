/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-ethers");

const envFile = process.env.NODE_ENV
  ? `.env.${process.env.NODE_ENV}`
  : ".env.dev";
require("dotenv").config({ path: envFile });

const { ALCHEMY_KEY, ACCOUNT_PRIVATE_KEY, DEFAULT_NETWORK } = process.env;

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: DEFAULT_NETWORK,
  networks: {
    hardhat: {},
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`],
    },
    ethereum: {
      chainId: 1,
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`],
    },
  },
};
