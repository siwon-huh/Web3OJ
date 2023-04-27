const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
    const [myAccount] = await ethers.getSigners();

    const MyMultiplicationCalculator = await ethers.getContractFactory(
        "MyMultiplicationCalculator"
    );
    const myMultiplicationCalculator = await MyMultiplicationCalculator.connect(
        myAccount
    ).deploy();
    await myMultiplicationCalculator.deployed();

    const instance = "0xA61714260d5a7d5D158568f43cA1CB69B51413EA"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
    const MultiplicationCalculatorProblem = await ethers.getContractFactory(
        "MultiplicationCalculatorProblem"
    );
    const multiplicationCalculatorProblem =
        MultiplicationCalculatorProblem.attach(instance);
    multiplicationCalculatorProblem
        .connect(myAccount)
        .setMultiplicationCalculator(myMultiplicationCalculator.address);
}

async function main() {
    calculatorSol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
