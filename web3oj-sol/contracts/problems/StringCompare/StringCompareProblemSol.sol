// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./StringCompareProblem.sol";

contract StringCompareProblemSol is IStringCompare {
    function compare(string memory _a, string memory _b) external pure returns (bool){
        // TODO
        return (keccak256(abi.encodePacked(_a)) == keccak256(abi.encodePacked(_b)));
    }
}