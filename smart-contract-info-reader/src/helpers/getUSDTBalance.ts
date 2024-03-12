import {ethers} from 'ethers';

interface IGetUSDTBalanceProps {
    address: string
    contractAddress: string
    contractABI: string[]
}


// Function to fetch the USDT balance of an address
export async function getUSDTBalance(
    {
        address,
        contractABI,
        contractAddress
    }: IGetUSDTBalanceProps): Promise<string> {

    try {
        const provider = ethers.getDefaultProvider();
        const contract: any = new ethers.Contract(contractAddress, contractABI, provider);

        const balance = await contract.balanceOf(address);
        return balance.toString();
    } catch (error) {
        console.error('Error occurred while fetching USDT balance:', error);
        throw error; // Rethrow the error to propagate it to the caller
    }


}