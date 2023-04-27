// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract DormantAccount {

}

contract DormantAccountProblemSol {
    function setDormantAccountContract(address _dormant_account_address) public payable{
        address payable dormant_account_address = payable(_dormant_account_address);
        selfdestruct(dormant_account_address);
        payable(msg.sender).transfer(msg.value);
    }
}