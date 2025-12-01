// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyContract.sol";

contract MyContractV2 is MyContract {
    function incrementValue() public {
        value += 1;
    }
}