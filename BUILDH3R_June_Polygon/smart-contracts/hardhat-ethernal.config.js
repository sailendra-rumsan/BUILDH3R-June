const { extendEnvironment } = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-ethernal");
require("./tasks/ethernal");

// Configure env variables
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// Add Ethernal
extendEnvironment((hre) => {
  hre.ethernalSync = true;
  hre.ethernalWorkspace = process.env.ETHERNAL_WORKSPACE;
  hre.ethernalTrace = true;
  hre.ethernalResetOnStart = process.env.ETHERNAL_WORKSPACE;
  hre.ethernalUploadAst = true;
});

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: "0.8.21",
  networks: {
    hardhat: {
      loggingEnabled: false,
    },
    polygonZkevmTestnet: {
      chainId: 2442,
      url: "https://rpc.cardona.zkevm-rpc.com",
      forking: {
        url: "https://rpc.cardona.zkevm-rpc.com",
      },
      accounts: [process.env.PRIVATE_KEY_DEPLOYER],
    },
  },
};

module.exports = config;
