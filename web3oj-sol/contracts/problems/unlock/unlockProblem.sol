// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract unlockProblem {
    bool public lock = true;
    address private player;

    constructor(address _player) {
        player = _player;
    }

    function unlock() public {
        require(tx.origin == player, "Only the player(tx.origin) can unlock the lock");
        require(msg.sender != player, "The player(msg.sender) cannot unlock the lock");
        lock = false;
    }
}