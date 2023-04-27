const { ethers } = require("hardhat");
const hre = require("hardhat");

async function ErrorHandleProblem() {
    const [player] = await ethers.getSigners();
    const instance = "0x67A49390e2FeBFD4a6Cc381eC2D7ba38b79906D9";

    const ErrorHandleProblem = await ethers.getContractAt(
        "ErrorHandleProblem",
        instance,
        player
    );

    try {
        await ErrorHandleProblem.setErrorMessage("No error message found.");
    } catch (error) {
        console.log(error.message);
    }
}

async function main() {
    ErrorHandleProblem();
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
