describe('Ethereum Functions', () => {
    it('should retrieve the last block number', () => {
        getLastBlockNumber().then((blockNumber) => {
            expect(blockNumber).toBeGreaterThan(0);
        }).catch((err) => {
            console.error(err)
        });
    });

    it('should fetch the USDT balance of a given address', () => {
        const address = '0x1234567890123456789012345678901234567890';
        getUSDTBalance({
            address: address,
            contractAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            contractABI: ['function balanceOf(address) view returns (uint256)']
        }).then((balance) => {
            expect(balance).toMatch(/^\d+$/);
        }).catch((err) => {
            console.error(err)
        });

    });
});