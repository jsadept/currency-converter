interface useCurrencyCurrentInputProps {
    convertedCurrency: number;
    currentCurrency: number;
    convertedValue: number;
}

interface useCurrencyCurrentInputReturnData {
    validCurrentValue: number;
    validConvertedValue: number;
}


export const getConvertedInputData = ({
                                          convertedCurrency,
                                          currentCurrency,
                                          convertedValue
                                      }: useCurrencyCurrentInputProps): useCurrencyCurrentInputReturnData => {

    let newCurrentData;


    if (convertedCurrency === currentCurrency) {
        newCurrentData = convertedValue;
    } else {
        newCurrentData = currentCurrency * convertedValue / convertedCurrency;
    }

    const newValidCurrentData = Number(newCurrentData.toFixed(2))
    
    return {
        validCurrentValue: newValidCurrentData,
        validConvertedValue: convertedValue
    };
};
