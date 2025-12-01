
async function main() {
    const myContractAddress = "0x21D7c70f10817C759b694ae0Cec0bC33B574192F"; // proxy addresss
    const MyContractV2 = await ethers.getContractFactory("MyContractV2");
    
    const upgraded = await upgrades.upgradeProxy(myContractAddress, MyContractV2)

    await upgraded.waitForDeployment();
    console.log("Upgraded to MyContractV2: :", upgraded.target);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });