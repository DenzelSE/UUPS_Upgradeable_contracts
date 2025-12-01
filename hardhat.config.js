require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();



module.exports = {
  defaultNetwork: "localhost",
  networks: {
    arb: {
      url: process.env.RPC_URL, 
      accounts: [process.env.PRIVATE_KEY], 
    },
    celo: {
      url: process.env.CELO_RPC_URL, 
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.22",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};
