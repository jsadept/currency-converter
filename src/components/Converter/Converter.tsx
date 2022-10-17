import React, {FC} from 'react'
import {useConverter} from "../../hooks/useConverter";

interface ConverterProps {
    base: string;
    date: Date | string;
    motd: {};
    success: boolean;
    rates: {
        [id: string]: number;
    };
}

const Converter: FC<ConverterProps> = ({rates}) => {

    const {
        currentHandler,
        convertedHandler,
        currentSelectHandler,
        convertedSelectHandler,
        currentValue,
        convertedValue,
        currentCurrency,
        convertedCurrency,
    } = useConverter({rates})

    return (

        <div className="bg-white px-4 py-16 rounded border-b border-gray-200 sm:px-6">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-10">

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Your value
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            type="text"
                            pattern="[0-9]*"
                            name="current-currency-input"
                            id="current-currency-input"
                            className="focus:ring-indigo-500 border  focus:border-indigo-500 block w-full pt-3 pb-3 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            value={currentValue}
                            onChange={currentHandler}
                            placeholder='0'
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="currency" className="sr-only">
                                Currency
                            </label>
                            <select
                                id="current-currency-select"
                                name="current-currency-select"
                                onChange={currentSelectHandler}
                                className="cursor-pointer focus:ring-indigo-500 border-2 bg-zinc-100 focus:bg-zinc-200 focus:border-gray-400 border-gray-300  h-full -mr-1 py-0 pt-3 pb-3 pl-2 pr-3 rounded-r-lg text-gray-500 sm:text-sm "
                                defaultValue={currentCurrency}
                            >
                                {Object.keys(rates!).map((key) => {
                                    return (
                                        <option key={key} value={rates![key]}>{key}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>


                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Converted value
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            type="text"
                            pattern="[0-9]*"
                            name="converted-currency-input"
                            id="converted-currency-input"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pt-3 pb-3 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md border "
                            value={convertedValue}
                            onChange={convertedHandler}
                            placeholder='0'
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="currency" className="sr-only">
                                Currency
                            </label>
                            <select
                                id="converted-currency-select"
                                name="converted-currency-select"
                                onChange={convertedSelectHandler}
                                className="cursor-pointer focus:ring-indigo-500 border-2 bg-zinc-100 focus:bg-zinc-200 focus:border-gray-400 border-gray-300  h-full -mr-1 py-0 pt-3 pb-3 pl-2 pr-3 rounded-r-lg text-gray-500 sm:text-sm "
                                defaultValue={convertedCurrency}
                            >
                                {Object.keys(rates!).map((key) => {
                                    return (
                                        <option key={'2' + key} value={rates![key]}>{key}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Converter;
