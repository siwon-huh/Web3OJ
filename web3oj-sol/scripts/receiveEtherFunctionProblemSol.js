const { ethers } = require("hardhat");
const hre = require("hardhat");

async function receiveEtherFunctionProblemSol() {
    const [player] = await ethers.getSigners();
    const instance = "0x098AFD8789504c56888Ec28620efFEa83DfC0E2b";

    const ReceiveEtherFunctionProblemSol = await ethers.getContractFactory(
        "ReceiveEtherFunctionProblemSol"
    );
    const receiveEtherFunctionProblemSol =
        await ReceiveEtherFunctionProblemSol.connect(player).deploy(instance);
    await receiveEtherFunctionProblemSol.deployed();
    await instance.setReceiveEtherAddress(
        receiveEtherFunctionProblemSol.address
    );
}

async function main() {
    receiveEtherFunctionProblemSol();
}

main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
