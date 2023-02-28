import { ethers } from 'ethers';

export const getETHValueTo1USD = async () => {
  const response = await fetch(
    'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH',
  );
  return response.json();
};

export async function convertUsdToEth(price: number, toFixedValue = 4) {
  const ethToUsdValue: any = await getETHValueTo1USD();
  const value = price * Number(ethToUsdValue?.ETH ?? 1);
  const ethValue = parseFloat(value.toFixed(toFixedValue));
  return ethValue ?? 0;
}

export const computeValue = async (tokenType: string, qty: number) => {
  const quantity = tokenType === 'ERC1155' ? qty : 1;
  const value = 1 * quantity;
  const ethValue = await convertUsdToEth(value, 18);
  const pricePercentage = (ethValue * 1) / 100;
  const finalValue = ethers.utils.parseEther(
    (ethValue + pricePercentage).toFixed(18).toString(),
  );
  return finalValue;
};
