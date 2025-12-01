// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyContract is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    uint256 public value;

    function initialize(uint256 initialValue) public initializer {
        __Ownable_init(msg.sender);
        __UUPSUpgradeable_init();
        value = initialValue;
    }

    function setValue(uint256 newValue) public onlyOwner {
        value = newValue;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}