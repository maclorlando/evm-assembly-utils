// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract String {
    function charAt(string memory input, uint index) public pure returns (bytes2) {
        bytes memory b = bytes(input);

        if (index >= b.length) {
            return 0x0000;
        }

        uint8 c;
        assembly {
            let word := mload(add(b, 32))
            c := byte(index, word)
        }

        return bytes2(uint16(c) << 8);
    }

    function debugCharAt(string memory input, uint index, uint step) public pure returns (uint256) {
        bytes memory b = bytes(input);

        assembly {
            let len := mload(b)
            let word := mload(add(b, 32))
            let c := byte(index, word)

            switch step
            case 0 { mstore(0x0, len) }
            case 1 { mstore(0x0, word) }
            case 2 { mstore(0x0, index) }
            case 3 { mstore(0x0, c) }
            default { mstore(0x0, 0) }

            return(0x0, 0x20)
        }
    }
}
