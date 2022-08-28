import 'dotenv/config'
// Server port
export const port = 8080;

// Max price impact %
export const priceImp = 2;

// Max safe fee
export const maxBuyFee = 10;
export const maxSellFee = 10;

// Owner address
export const ownerAddress = process.env.OWNER_ADDRESS;

// Http providers
export const BSChttpprovider = 'https://bsc-dataseed.binance.org/';
export const ETHERhttpprovider = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
export const AVAXhttpprovider = 'https://api.avax.network/ext/bc/C/rpc';
export const FTMhttpprovider = 'https://rpc.ftm.tools';
export const MATIChttpprovider = 'https://polygon-rpc.com';
export const XDAIhttpprovider = 'https://rpc.gnosischain.com/';

// Multicall addresses
export const BSCaddress = '';
export const ETHERaddress = process.env.ETHCA;
export const AVAXaddress = process.env.AVAXCA;
export const FTMaddress = '';
export const MATICaddress = '';
export const XDAIaddress = '';
