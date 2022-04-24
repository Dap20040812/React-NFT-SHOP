require("@nomiclabs/hardhat-waffle");


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports={
  solidity:{version:"0.8.4",
  settings:{optimizer:{enabled:!0,runs:200}}},
  networks:{
    fuji:{
      url:"https://api.avax-test.network/ext/bc/C/rpc",
      chainId:43113,
      accounts:["4e9f4267bc9312cae677e5f07b7b85c82d276a98469e391ed590cb4856975a68","15e0eedf0bbc812aec3015131b94e121bdea134a8486d2f55b0d4ea662cc0f47"]},
      mainnet:{url:"https://api.avax.network/ext/bc/C/rpc",
      chainId:43114,
      accounts:["4e9f4267bc9312cae677e5f07b7b85c82d276a98469e391ed590cb4856975a68","15e0eedf0bbc812aec3015131b94e121bdea134a8486d2f55b0d4ea662cc0f47"]}
  }
};