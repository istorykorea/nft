# dev process

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
```