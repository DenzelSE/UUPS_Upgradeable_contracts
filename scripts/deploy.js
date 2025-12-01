const {ethers, upgrades} = require("hardhat");

async function main() {
    const MyContract = await ethers.getContractFactory("MyContract");

    const myContract = await upgrades.deployProxy(MyContract, [42], {initializer: "initialize", kind: "uups"});
    await myContract.waitForDeployment();

    console.log("MyContract deployed to:", await myContract.target);

    // Initialize the contract
    // const tx = await myContract.initialize(42);
    // await tx.wait();

    console.log("Contract initialized with value:" );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });