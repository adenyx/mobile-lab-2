export const getAllCategoriesFromProducts = products => {
  const categoriesList = products.map(el => el.category);
  const result = Array.from(new Set(categoriesList));
  return result;
};

export const getCurrenciesCodes = currencies => {
  return [
    { label: 'BYN', value: 'byn' },
    ...currencies.map(el => ({
      label: el.Cur_Abbreviation,
      value: el.Cur_Abbreviation.toLowerCase(),
    })),
  ];
};

export const convertCurrencies = (costInUSD, currentCurrency, currencies) => {
  const currentCurrencyData = currencies.find(
    el => el.Cur_Abbreviation.toLowerCase() === currentCurrency,
  );
  const usdCurrencyData = currencies.find(el => el.Cur_Abbreviation === 'USD');
  if (currentCurrency === 'usd') {
    return costInUSD;
  }
  if (currentCurrency === 'byn') {
    return (costInUSD * usdCurrencyData.Cur_OfficialRate).toFixed(2);
  }
  return (
    ((costInUSD * usdCurrencyData.Cur_OfficialRate) /
      currentCurrencyData.Cur_OfficialRate) *
    currentCurrencyData.Cur_Scale
  ).toFixed(2);
};
