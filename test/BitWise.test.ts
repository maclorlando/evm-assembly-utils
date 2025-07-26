import { expect } from "chai";
import { ethers } from "hardhat";
import { BitWise } from "../typechain-types";

describe("BitWise", function () {
  let bitWise: BitWise;

  before(async () => {
    const BitWiseFactory = await ethers.getContractFactory("BitWise");
    bitWise = (await BitWiseFactory.deploy()) as BitWise;
  });

  it("countBitSet should count bits correctly", async () => {
    expect(await bitWise.countBitSet(7)).to.equal(3);
    expect(await bitWise.countBitSet(0)).to.equal(0);
    expect(await bitWise.countBitSet(255)).to.equal(8);
  });

  it("countBitSetAsm should count bits correctly", async () => {
    expect(await bitWise.countBitSetAsm(7)).to.equal(3);
    expect(await bitWise.countBitSetAsm(0)).to.equal(0);
    expect(await bitWise.countBitSetAsm(255)).to.equal(8);
  });
});
