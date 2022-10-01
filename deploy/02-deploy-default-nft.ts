import { ethers } from "hardhat";

const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const contract = await ethers.getContractFactory("DefaultNFT");
  const deployedContract = await contract.deploy();

  await deployedContract.deployed();

  console.log("DefaultNFT Contract address:", deployedContract.address);

  // TODO Verify contract by address
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
