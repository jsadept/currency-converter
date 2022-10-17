interface useCurrencyCurrentInputProps {
    convertedCurrency: number;
    currentCurrency: number;
    currentValue: number;
}

interface useCurrencyCurrentInputReturnData {
    validConvertedValue: number;
    validCurrentCurrency: number;
}


export const getCurrentSelectData = ({
                                         convertedCurrency,
                                         currentCurrency,
                                         currentValue
                                     }: useCurrencyCurrentInputProps): useCurrencyCurrentInputReturnData => {


    const newConvertedData = convertedCurrency * currentValue / currentCurrency;
    const newValidConvertedData = Number(newConvertedData.toFixed(2))


    return {
        validConvertedValue: newValidConvertedData,
        validCurrentCurrency: currentCurrency
    };
};
