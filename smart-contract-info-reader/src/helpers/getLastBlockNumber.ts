import {ethers} from 'ethers';

// Function to retrieve the last block number of the Ethereum mainnet
export async function getLastBlockNumber(): Promise<number> {
    const provider = ethers.getDefaultProvider();
    return await provider.getBlockNumber();
}