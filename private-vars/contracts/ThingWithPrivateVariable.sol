//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract ThingWithPrivateVariable {
    string private secret;

    constructor(string memory _secret) {
        secret = _secret;
    }

    function spillBeans() public view returns (string memory) {
        return secret;
    }

    function setSecret(string memory _secret) public {
        secret = _secret;
    }
}
