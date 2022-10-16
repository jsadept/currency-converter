

export const getValidCurrency = (currency: number): number => {

    const validCurrency = 1 / currency;
    const result = Number(validCurrency.toFixed(2));
    return result;

}
