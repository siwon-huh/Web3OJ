const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
    const [myAccount] = await ethers.getSigners();

    const MyMinusCalculator = await ethers.getContractFactory(
        "MyMinusCalculator"
    );
    const myMinusCalculator = await MyMinusCalculator.connect(
        myAccount
    ).deploy();
    await myMinusCalculator.deployed();

    const instance = "0x20598e196d1c10dB33cF6343B408cD219e73659C"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
    const MinusCalculatorProblem = await ethers.getContractFactory(
        "MinusCalculatorProblem"
    );
    const minusCalculatorProblem = MinusCalculatorProblem.attach(instance);
    minusCalculatorProblem
        .connect(myAccount)
        .setMinusCalculator(myMinusCalculator.address);
}

async function main() {
    calculatorSol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
