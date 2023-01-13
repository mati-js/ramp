import Web3 from 'web3';

const web3Instances = {
  ethereum: new Web3(new Web3.providers.HttpProvider('https://eth-mainnet.g.alchemy.com/v2/jozu1kXFVg58-D_TbD89y2yyxKnK4bwQ')),
  polygon: new Web3(new Web3.providers.HttpProvider('https://polygon-mainnet.g.alchemy.com/v2/32RUGtx6TUcPBr2mI57TwJah6Q3qQVUG')),
  bsc: new Web3(new Web3.providers.HttpProvider('https://rpc.ankr.com/bsc'))
}

export default web3Instances;