import {ethers} from 'ethers';

// Function to retrieve the last block number of the Ethereum mainnet
export async function getLastBlockNumber(): Promise<number> {
    try {
        const provider = ethers.getDefaultProvider();
        return await provider.getBlockNumber();
    } catch (error) {
        console.error('Error occurred while retrieving the last block number:', error);
        throw error;
    }
}