// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface unlockProblem {
    function unlock() external;
}

contract unlockProblemSol {
    unlockProblem public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = unlockProblem(_contractAddress);
    }

    function Unlock() public {
		contractAddress.unlock();
	}
}