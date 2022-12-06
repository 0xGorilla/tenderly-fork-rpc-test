import '@nomiclabs/hardhat-ethers';
import * as tdly from "@tenderly/hardhat-tenderly";
import { HardhatUserConfig } from "hardhat/config";

tdly.setup({ automaticVerifications: false });

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    tenderly: {
      chainId: 1,
      url: `https://rpc.tenderly.co/fork/xxxxx`,
    },
  },
  tenderly: {
    project: 'price-oracle',
    username: 'defi-wonderland',
    privateVerification: false
  }
};

export default config;
