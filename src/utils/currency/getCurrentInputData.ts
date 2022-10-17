interface useCurrencyCurrentInputProps {
    convertedCurrency: number;
    currentCurrency: number;
    currentValue: number;
}

interface useCurrencyCurrentInputReturnData {
    validCurrentValue: number;
    validConvertedValue: number;
}


export const getCurrentInputData = ({
                                        convertedCurrency,
                                        currentCurrency,
                                        currentValue
                                    }: useCurrencyCurrentInputProps): useCurrencyCurrentInputReturnData => {

    const newConvertedData = convertedCurrency * currentValue / currentCurrency;
    const validConvertedValue = Number(newConvertedData.toFixed(2))

    return {
        validCurrentValue: currentValue,
        validConvertedValue
    };
};
