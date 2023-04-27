const { ethers } = require("hardhat");
const hre = require("hardhat");

async function DormantAccountProblemSol() {
    const [player] = await ethers.getSigners();

    const DormantAccountProblemSol = await ethers.getContractFactory(
        "DormantAccountProblemSol"
    );
    const dormantAccountProblemSol = await DormantAccountProblemSol.connect(
        player
    ).deploy();
    await dormantAccountProblemSol.deployed();

    const instance = "0x6dae4c2789C7526a9e4E4ECbdD4110980d565136"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
    const DormantAccountProblem = await ethers.getContractFactory(
        "DormantAccount"
    );
    const dormantAccountProblem = DormantAccountProblem.attach(instance);
    dormantAccountProblemSol
        .connect(player)
        .setDormantAccountContract(dormantAccountProblem.address, {
            value: ethers.utils.parseEther("0.001"),
        });
    console.log(dormantAccountProblemSol.address);
}

async function main() {
    DormantAccountProblemSol();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
