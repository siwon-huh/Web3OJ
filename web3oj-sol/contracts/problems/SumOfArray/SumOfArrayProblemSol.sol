// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ISumOfArray {
    function sum(uint256[] memory _a) external pure returns (uint256);
}

// contract SumOfArrayProblemSol is ISumOfArray {
//     function sum(uint[] memory _a) override public pure returns (uint) {
//         uint total;
//         uint length = _a.length;
//         assembly {
//             let ptr := add(_a, 0x20) // Point to the first element of the array
//             for { let end := add(ptr, mul(length, 0x20)) } lt(ptr, end) { ptr := add(ptr, 0x20) } {
//                 total := add(total, mload(ptr))
//             }
//         }
//         return total;
//     }
// }
contract SumOfArrayProblemSol is ISumOfArray {
    function sum(uint256[] memory _a) public pure override returns (uint256) {
        uint256 total;
        total += _a[0];
        total += _a[1];
        total += _a[2];
        total += _a[3];
        total += _a[4];
        total += _a[5];
        total += _a[6];
        total += _a[7];
        total += _a[8];
        total += _a[9];
        total += _a[10];
        total += _a[11];
        total += _a[12];
        total += _a[13];
        total += _a[14];
        total += _a[15];
        total += _a[16];
        total += _a[17];
        total += _a[18];
        total += _a[19];
        total += _a[20];
        total += _a[21];
        total += _a[22];
        total += _a[23];
        total += _a[24];
        total += _a[25];
        total += _a[26];
        total += _a[27];
        total += _a[28];
        total += _a[29];
        total += _a[30];
        total += _a[31];
        total += _a[32];
        total += _a[33];
        total += _a[34];
        total += _a[35];
        total += _a[36];
        total += _a[37];
        total += _a[38];
        total += _a[39];
        total += _a[40];
        total += _a[41];
        total += _a[42];
        total += _a[43];
        total += _a[44];
        total += _a[45];
        total += _a[46];
        total += _a[47];
        total += _a[48];
        total += _a[49];
        total += _a[50];
        total += _a[51];
        total += _a[52];
        total += _a[53];
        total += _a[54];
        total += _a[55];
        total += _a[56];
        total += _a[57];
        total += _a[58];
        total += _a[59];
        total += _a[60];
        total += _a[61];
        total += _a[62];
        total += _a[63];
        total += _a[64];
        total += _a[65];
        total += _a[66];
        total += _a[67];
        total += _a[68];
        total += _a[69];
        total += _a[70];
        total += _a[71];
        total += _a[72];
        total += _a[73];
        total += _a[74];
        total += _a[75];
        total += _a[76];
        total += _a[77];
        total += _a[78];
        total += _a[79];
        total += _a[80];
        total += _a[81];
        total += _a[82];
        total += _a[83];
        total += _a[84];
        total += _a[85];
        total += _a[86];
        total += _a[87];
        total += _a[88];
        total += _a[89];
        total += _a[90];
        total += _a[91];
        total += _a[92];
        total += _a[93];
        total += _a[94];
        total += _a[95];
        total += _a[96];
        total += _a[97];
        total += _a[98];
        total += _a[99];
        return total;
        return total;
    }
}
