import { ethers } from "ethers";

const RPC_URL = process.env.RPC_URL;
const ADDRESS = process.env.ADDRESS;

const provider = new ethers.JsonRpcProvider(RPC_URL);

const main = async () => {
  const bal = await provider.getBalance(ADDRESS);
  console.log("Balance:", ethers.formatEther(bal), "ETH");
};

main().catch(console.error);
