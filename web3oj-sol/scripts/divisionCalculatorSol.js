const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
    const [myAccount] = await ethers.getSigners();

    const MyDivisionCalculator = await ethers.getContractFactory(
        "MyDivisionCalculator"
    );
    const myDivisionCalculator = await MyDivisionCalculator.connect(
        myAccount
    ).deploy();
    await myDivisionCalculator.deployed();

    const instance = "0x4ACC56CeFEF24eB475c43De7b0B1f28f5339eC02"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
    const DivisionCalculatorProblem = await ethers.getContractFactory(
        "DivisionCalculatorProblem"
    );
    const divisionCalculatorProblem =
        DivisionCalculatorProblem.attach(instance);
    divisionCalculatorProblem
        .connect(myAccount)
        .setDivisionCalculator(myDivisionCalculator.address);
}

async function main() {
    calculatorSol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
