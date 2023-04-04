# dev process

## keywords in ether infra

- **Hardhat vs truffle**: Ether developer utils helper
- **Alchemy vs INFURA**: Node provider
  - Naturally, hosting smart contracts requires you to set up a node of the blockchain.
  - In essence, they are node providers; i.e., they provide remote access to blockchain services so you don’t have to run your own node.
- **Goerli vs Sepolia**: Ether testnet
- **ERC721 vs ERC1155**
  - ERC1155 facilitate batch transfers, also reduces gas up to 90%.
  - ERC721 need for tx to be created for individual NFTs it leads to slow.
  - ERC721 only supports the creation of NFTs but ERC1155 supports creation of NFTs but also fungible and semi-fungible token. This flexibility is a significant advantage. 
  - ERC1155 can support DEX.
  - 


## Getting Started

#### 1. install dependencies

```bash
npm init

npm i --save-dev hardhat
npm i --save-dev @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan
npm i @openzeppelin/contracts
npm i dotenv --save
npm i --save-dev ethers@^5.0.0
npm i --save-dev node-fetch
```

#### 2. Initialize the Hardhat

```bash
> npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.13.0 👷‍

? What do you want to do? … 
  Create a JavaScript project
  Create a TypeScript project
❯ Create an empty hardhat.config.js
  Quit
```

#### 3. Alchemy

Generate alchemy app to get an `APP_KEY`

- [link](https://docs.alchemy.com/docs/alchemy-quickstart-guide)


#### 4. Compile the contract

```bash
> npx hardhat compile

# dev phase
> npx hardhat run scripts/deploy.js --network goerli
Deploying contracts with the account: 0xF69E1c1Abbf0F4cE262211DAFcba2eE204bDcE63
Account balance: 100000000000000000
Contract deployed to address: 0x2467CEeEfC63C0C08b99acb9592a87A4D95cD8fd
```