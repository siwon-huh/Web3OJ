const { ethers } = require("hardhat");
const hre = require("hardhat");

async function stringCompareProblemSol() {
    const [myAccount] = await ethers.getSigners();

    const StringCompareProblemSol = await ethers.getContractFactory(
        "StringCompareProblemSol"
    );
    const stringCompareProblemSol = await StringCompareProblemSol.connect(
        myAccount
    ).deploy();
    await stringCompareProblemSol.deployed();

    const instance = "0xd3533801c244E5B6B225827046796B43Ad6b5619"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
    const StringCompareProblem = await ethers.getContractFactory(
        "StringCompareProblem"
    );
    const stringCompareProblem = StringCompareProblem.attach(instance);
    stringCompareProblem
        .connect(myAccount)
        .setStringCompareContract(stringCompareProblemSol.address);
    console.log(stringCompareProblemSol.address);
}

async function main() {
    stringCompareProblemSol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
