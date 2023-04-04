# OpenSea ERC721 Tutorial
> [Opensea ERC721 tutorial](https://docs.opensea.io/docs/1-structuring-your-smart-contract)

## `Creature` ERC721 contract
```sol
pragma solidity ^0.5.0;

import "./ERC721Tradable.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

/**
 * @title Creature
 * Creature - a contract for my non-fungible creatures.
 */
contract Creature is TradeableERC721Token {
  constructor(address _proxyRegistryAddress) TradeableERC721Token("Creature", "OSC", _proxyRegistryAddress) public {  }

  function baseTokenURI() public view returns (string memory) {
    return <exampleUrlHere>;
  }
}
```

- `baseTokenURI()`

위 메서드를 통해 `contract Creature`안에 있는 `tokenId`를 `off-chain`에 존재하는 metadata에 매핑할 수 있습니다.

## OpenSea Whitelisting (optional)

`ERC721Tradable` and `ERC1155Tradable` contracts들의 `whitelist`는 Opensea의 proxy accounts 유저들이 gas 사용없이 Opensea에 존재하는 어떤 아이템도 거래할 수 있도록 허용합니다.

Opensea에서 각 유저들은 하나의 Proxy account를 가지며, 이는 최종적으로 opensea 마켓 contracts에서 trade될 때 호출됩니다.

## [Ownable](https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable)
> `The Ownable contract`

The Ownable contract는 소유자로서의 권리를 정의내린 contract이며, 이를 통해 특정 권한이 있어야만 접근 할 수 있는 함수들을 호출 할 수 있습니다.

Default로 owner account는 contract deployer가 되며, 이는 `transferOwnership()`를 통해 change 할 수 있습니다.


## 2. Adding metadata

- `Off-chain metadata`

Once you've deployed contract, than will need a way for each item to show up properly on Opensea.

**Each token id in your ERC721 contract will have corresponding metadata URI, returns additional information.** To find URI, Opensea use the `tokenURI()` in ERC721 and `uri()` in ERC1155.

- i.g metadata looks like below.

```json
{
  "name": "Herbie Starbelly",
  "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.",
  "image": "https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png",
  "attributes": [...]
}
```


