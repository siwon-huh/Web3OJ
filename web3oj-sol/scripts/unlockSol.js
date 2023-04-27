const { ethers } = require("hardhat");
const hre = require("hardhat");

async function lock() {
    const [player] = await ethers.getSigners();
    const instance = "0xce1D37A13E461718E6cD218D0df1B73a4fE61e92";

    const UnlockSol = await ethers.getContractFactory("unlockProblemSol");
    const unlockSol = await UnlockSol.connect(player).deploy(instance);
    await unlockSol.deployed();

    const result = await unlockSol.Unlock();
    console.log(result);
}

async function main() {
    lock();
}

main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
