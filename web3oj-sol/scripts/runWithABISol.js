const { ethers } = require("hardhat");
const hre = require("hardhat");

async function runWithABISol() {
    const [player] = await ethers.getSigners();

    const contract = "0x3F8fADB392785C004E1FdfF3BfDA05C81855F9f8";
    const function_sig = "da17c605";
    const my_address =
        "0000000000000000000000000BF03789de928b0f8464AC66302000B05CD51b65";
    const transaction = {
        data: `0x${function_sig}${my_address}`,
        to: contract,
        from: player.address,
        gasLimit: 10000000,
    };
    const result = await player.sendTransaction(transaction);
    console.log(result);
}

async function main() {
    runWithABISol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
