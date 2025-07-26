# 🧠 Bitwise & String Utilities – EVM Assembly Exercises

A Solidity-based project exploring low-level EVM operations using `assembly` in Solidity. Includes optimized implementations of common utility functions using bitwise logic, memory layout, and string manipulation.

---

## 🚀 Features

- ✅ Bitwise utility to count bits set to 1 (`countBitSet`)
- ✅ Optimized version using `assembly` (`countBitSetAsm`)
- ✅ Custom string manipulation with `charAt` implementation
- ✅ Comprehensive unit tests for both Solidity and inline assembly functions

---

## 🛠️ Technologies Used

- **Solidity** (`^0.8.20`)
- **Hardhat** for development and testing
- **Chai + Mocha** for test assertions
- **TypeScript** test scripts (`.ts`)

---

## 🧪 Tests

You can run the full test suite with:

    npx hardhat test

Expected output includes:

- ✔️ All `countBitSet` and `countBitSetAsm` logic verified with test cases
- ✔️ String `charAt()` behavior tested for valid and edge inputs

---

## 📦 Local Setup

1. Clone this repository and install dependencies:

    npm install

2. Run the tests to verify:

    npx hardhat test

No external deployment or configuration is needed — all tests run locally and independently of `.env` files or network settings.

---

## 📚 Purpose

This project was developed as part of an in-depth study of EVM-level behavior, including gas optimization and direct memory access. It serves as a learning tool for mastering:

- Solidity `assembly` blocks
- Bitwise operations
- String handling without standard libraries
- Hardhat test-driven development

---

## ✅ Sample Test Case Highlights

    countBitSet(0x7)           → 3
    countBitSetAsm(0xffff)     → 16
    charAt("abcdef", 2)        → "c"
    charAt("", 0)              → 0x0000
    charAt("george", 10)       → 0x0000

---

## 📂 Directory Structure

- `contracts/BitWise.sol` – Regular and `assembly` bit counting logic
- `contracts/String.sol` – Low-level string manipulation
- `test/BitWise.test.ts` – Unit tests for both versions
- `test/String.test.ts` – Full suite with debug values and edge cases

---

## 🔐 Notes

This repo emphasizes gas-aware code using low-level EVM operations, ideal for developers looking to deepen their understanding of Solidity internals and optimization techniques.
