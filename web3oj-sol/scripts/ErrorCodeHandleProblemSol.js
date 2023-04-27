const { ethers } = require("hardhat");
const hre = require("hardhat");

async function ErrorHandleProblem2() {
    const [player] = await ethers.getSigners();
    const instance = "0x0e5156BCDf2727b7706252511D62DF0C7D8eF665";

    const ErrorHandleProblem = await ethers.getContractAt(
        "ErrorHandleProblem2",
        instance,
        player
    );

    try {
        await ErrorHandleProblem.setErrorCode(18);
    } catch (error) {
        console.log(error.message);
    }
}

async function main() {
    ErrorHandleProblem2();
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
