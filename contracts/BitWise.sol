// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract BitWise {
    // Original implementation
    function countBitSet(uint8 data) public pure returns (uint8 result) {
        for (uint i = 0; i < 8; i++) {
            if (((data >> i) & 1) == 1) {
                result += 1;
            }
        }
    }

    // Inline assembly implementation
    function countBitSetAsm(uint8 data) public pure returns (uint8 result) {
        assembly {
            let d := data
            result := 0
            for { let i := 0 } lt(i, 8) { i := add(i,1) } {
                if eq(and(shr(i,d),1),1) {
                    result := add(result,1)
                }
            }
        }
    }
}
