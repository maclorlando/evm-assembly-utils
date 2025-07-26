import { expect } from "chai";
import { ethers } from "hardhat";
import { String as StringContract } from "../typechain-types";

describe("String (with debug values)", function () {
  let stringContract: StringContract;

  before(async () => {
    const StringFactory = await ethers.getContractFactory("String");
    stringContract = (await StringFactory.deploy()) as StringContract;
  });

  it(`charAt("abcdef", 2) should return 0x6300`, async () => {
    const result = await stringContract.charAt("abcdef", 2);

    console.log(`Raw result:`, result);

    // result is already a hex string
    expect(result).to.equal("0x6300");
  });

  it(`charAt("", 0) should return 0x0000`, async () => {
    const result = await stringContract.charAt("", 0);
    expect(result).to.equal("0x0000");
  });

  it(`charAt("george", 10) should return 0x0000`, async () => {
    const result = await stringContract.charAt("george", 10);
    expect(result).to.equal("0x0000");
  });


  it(`debug values`, async () => {
    const labels = ["len", "word", "offset", "c"];
    for (let i = 0; i <= 3; i++) {
      const val = await stringContract.debugCharAt("abcdef", 2, i);
      console.log(`${labels[i]}: ${val.toString()}`);
    }
  });
});
