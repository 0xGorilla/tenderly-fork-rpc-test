import { getMainnetSdk } from '@dethcrypto/eth-sdk-client';
import hre, { ethers } from 'hardhat';

(async () => {
  const wethWhaleAddress = '0x00000000219ab540356cbb839cbe05303d7705fa';
  const [myWallet] = await hre.ethers.getSigners();

  const { weth } = getMainnetSdk(myWallet);

  console.log('Getting lots of ETH');

  console.log(`Whale balance`, await ethers.provider.getBalance(wethWhaleAddress));
  
  await hre.network.provider.send(
    'eth_sendTransaction',
    [{
      from: wethWhaleAddress,
      to: myWallet.address,
      value: '1000'
    }]
  );

  console.log(`It's all mine!`);
})();
