async function main() {
    const myContractAddress = "0x21D7c70f10817C759b694ae0Cec0bC33B574192F"; // proxy address
    const myContract = await ethers.getContractAt("MyContractV2", myContractAddress);

    const tx = await myContract.incrementValue();
    await tx.wait();

    const newValue = await myContract.value();
    console.log("New value after increment:", newValue.toString());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });