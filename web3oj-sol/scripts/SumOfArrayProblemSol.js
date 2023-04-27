const { ethers } = require("hardhat");
const hre = require("hardhat");

async function SumOfArrayProblemSol() {
    const [player] = await ethers.getSigners();

    const SumOfArrayProblemSol = await ethers.getContractFactory(
        "SumOfArrayProblemSol"
    );
    const sumOfArrayProblemSol = await SumOfArrayProblemSol.connect(
        player
    ).deploy();
    await sumOfArrayProblemSol.deployed();

    const instance = "0x40C4dDc0c0bDD568Dd6d31c8c020De068Fddd164"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
    const SumOfArrayProblem = await ethers.getContractFactory(
        "SumOfArrayProblem"
    );
    const sumOfArrayProblem = SumOfArrayProblem.attach(instance);
    sumOfArrayProblem
        .connect(player)
        .setSumOfArrayContract(sumOfArrayProblemSol.address);
    console.log(sumOfArrayProblemSol.address);
}

async function main() {
    SumOfArrayProblemSol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
