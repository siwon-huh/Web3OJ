// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./PlusCalculatorProblem.sol";

contract MyPlusCalculator is IPlusCalculator {
    function plus(uint256 input1, uint256 input2) override public pure returns (uint256){
        // TODO
        return input1 + input2;
    }
}
