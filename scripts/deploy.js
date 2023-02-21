const hre = require("hardhat");

async function main() {
  const DabloonToken = await hre.ethers.getContractFactory("DabloonToken");
  const  dabloonToken= await DabloonToken.deploy(100000000, 50);

  await dabloonToken.deployed();

  console.log("Dabloon Token deployed: ", dabloonToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});