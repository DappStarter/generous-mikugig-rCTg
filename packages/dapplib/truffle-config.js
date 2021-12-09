require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember pudding hidden private surge soon'; 
let testAccounts = [
"0x8c7f307dfcfa9254ee411e601b88e8f668a687d788fe9cbb86f7ad04f861c5e1",
"0x60c9ff881aeefbeeafb37ad17338f48b77e4004da6cacb0fcf86dfb346d4591f",
"0x284e229f89976f4c4d4f132a653966e730a0d12d57187c0f7f1d5b329dde381f",
"0x015982d942d7fe15d32ac601cebe3431e1530e3db31e886d05fda9f7c83657e7",
"0x86687627704fde07b68359f2243a0711a2a8b5e2d71c64d9140eccd3a9fc35d5",
"0xa6bbd620fcfe513f06b60f41f69eb6f704a34ba30d6f84c808694084c8410900",
"0x605065919cf6bcb0292ccb22593e5bf79c42bd59a3564a0de91f2e343d430ade",
"0x02bfe3a392940350584ad6a2279e210f98d44b715c65a43db78b7f8745ee76ee",
"0x39fbc78cc3b5db7de12fdd0e48c05068a26e3cd8fa3abda3538446de35ad5745",
"0x33bc90734083394a69ad6ef21b614028fe1aa6ffe59e802cd9edd018826d1a55"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


