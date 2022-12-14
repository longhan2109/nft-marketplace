import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const GOERLI_RPC_URL =
  process.env.GOERLI_RPC_URL ||
  "https://eth-goerli.g.alchemy.com/v2/your-api-key";
const BSC_TEST_RPC_URL = "https://data-seed-prebsc-2-s2.binance.org:8545";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [`${PRIVATE_KEY}`],
      chainId: 5,
    },
    bsctest: {
      url: BSC_TEST_RPC_URL,
      accounts: [`${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    // apiKey: ETHERSCAN_API_KEY,
    apiKey: BSCSCAN_API_KEY,
  },
  mocha: {
    timeout: 200000, // 200 seconds max for running tests
  },
};

export default config;
