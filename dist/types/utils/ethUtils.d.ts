import { ethers } from 'ethers';
export declare const getETHValueTo1USD: () => Promise<any>;
export declare function convertUsdToEth(price: number, toFixedValue?: number): Promise<number>;
export declare const computeValue: (price: number) => Promise<ethers.BigNumber>;
