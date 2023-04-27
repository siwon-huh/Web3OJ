const { ethers } = require("hardhat");
/* global BigInt */

async function permit() {
    const [player] = await ethers.getSigners();
    const contract = "0x4D219dCd6C57ad81CA41956705b38145aacB9136";
    const token = await ethers.getContractAt(
        "Web3OJTPermitable",
        contract,
        player
    );
    const decimal = BigInt(18);
    const nonce = await token.nonces(player.address);

    const domain = {
        name: "Web3 Online Judge Token",
        version: "1",
        chainId: 5,
        verifyingContract: contract,
    };

    const types = {
        Permit: [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
            { name: "value", type: "uint256" },
            { name: "nonce", type: "uint256" },
            { name: "deadline", type: "uint256" },
        ],
    };

    const value = {
        owner: player.address,
        spender: contract,
        value: 20n * 10n ** decimal,
        nonce: nonce,
        deadline: 8640000000,
    };

    const signature = await player._signTypedData(domain, types, value);
    const signed = signature.substring(2);
    const v = Number("0x" + signed.substring(128));
    const r = "0x" + signed.substring(0, 64);
    const s = "0x" + signed.substring(64, 128);
    console.log(v, r, s);

    await token.permit(
        player.address,
        contract,
        20n * 10n ** decimal,
        8640000000,
        v,
        r,
        s
    );
}

permit();
