import { ethers } from "hardhat";

const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const contract = await ethers.getContractFactory("LongMarketplace");
  const deployedContract = await contract.deploy(
    "0xB23CDfcDE6Ed8C8981c00E5ce137d9FD7219C1C9",
    "0x5547E550ACf84CAEaEFF8ad410b23910Adb97fc6"
  );

  await deployedContract.deployed();

  console.log("LongMarketplace Contract address:", deployedContract.address);

  // TODO Verify contract by address
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
