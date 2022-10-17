interface useCurrencyCurrentInputProps {
    convertedCurrency: number;
    currentCurrency: number;
    currentValue: number;
}

interface useCurrencyCurrentInputReturnData {
    validConvertedValue: number;
    validConvertedCurrency: number;
}


export const getConvertedSelectData = ({
                                           convertedCurrency,
                                           currentCurrency,
                                           currentValue
                                       }: useCurrencyCurrentInputProps): useCurrencyCurrentInputReturnData => {


    const newConvertedData = convertedCurrency * currentValue / currentCurrency;
    const newValidConvertedData = Number(newConvertedData.toFixed(2))


    return {
        validConvertedValue: newValidConvertedData,
        validConvertedCurrency: convertedCurrency
    };
};
