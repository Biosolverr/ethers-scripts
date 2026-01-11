// Minimal example (ethers v6 style)
import { ethers } from "ethers";

const RPC_URL = process.env.RPC_URL; // put your RPC here
const provider = new ethers.JsonRpcProvider(RPC_URL);

const main = async () => {
  const block = await provider.getBlockNumber();
  console.log("Current block:", block);
};

main().catch(console.error);
