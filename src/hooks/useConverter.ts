import {ChangeEvent, useState} from "react";
import {getCurrentInputData} from "../utils/currency/getCurrentInputData";
import {getConvertedInputData} from "../utils/currency/getConvertedInputData";
import {getCurrentSelectData} from "../utils/currency/getCurrentSelectData";
import {getConvertedSelectData} from "../utils/currency/getConvertedSelectData";

interface useConverterProps {
    rates: {
        [id: string]: number;
    }
}

export const useConverter = ({rates}: useConverterProps) => {
    const [currentValue, setCurrentValue] = useState<number | string>('');
    const [currentCurrency, setCurrentCurrency] = useState<number>(rates['UAH']);

    const [convertedValue, setConvertedValue] = useState<number | string>('');
    const [convertedCurrency, setConvertedCurrency] = useState<number>(rates['USD']);


    const currentHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = Number(e.target.value);

        const {validCurrentValue, validConvertedValue} = getCurrentInputData({
            convertedCurrency,
            currentCurrency,
            currentValue
        })


        setCurrentValue(validCurrentValue)
        setConvertedValue(validConvertedValue)
    }

    const convertedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const convertedValue = Number(e.target.value);
        const {validCurrentValue, validConvertedValue} = getConvertedInputData({
            convertedCurrency,
            currentCurrency,
            convertedValue
        })


        setConvertedValue(validConvertedValue)
        setCurrentValue(validCurrentValue)
    }

    const currentSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const currentCurrency = Number(e.target.value);
        const validCurrentValue = Number(currentValue);

        const {validConvertedValue, validCurrentCurrency} = getCurrentSelectData({
            convertedCurrency,
            currentCurrency,
            currentValue: validCurrentValue
        })


        setCurrentCurrency(validCurrentCurrency)
        setConvertedValue(validConvertedValue)
    }

    const convertedSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const convertedCurrency = Number(e.target.value);
        const validCurrentValue = Number(currentValue);

        const {validConvertedValue, validConvertedCurrency} = getConvertedSelectData({
            convertedCurrency,
            currentCurrency,
            currentValue: validCurrentValue
        })

        setConvertedValue(validConvertedValue)
        setConvertedCurrency(validConvertedCurrency)
    }

    return {
        currentHandler,
        convertedHandler,
        currentSelectHandler,
        convertedSelectHandler,

        currentValue,
        setCurrentValue,
        convertedValue,
        setConvertedValue,

        currentCurrency,
        convertedCurrency,
        setCurrentCurrency,
        setConvertedCurrency
    }
}
