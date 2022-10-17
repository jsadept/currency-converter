import React from 'react';
import {useGetCurrencyQuery} from "../../services/CurrencyService";
import Converter from "./Converter";

const ConverterContainer = () => {

    const { data, isError, isLoading } = useGetCurrencyQuery("USD");
    return (
        <>
            {isLoading &&
                <>
                    Loading...
                </>
            }
            {isError &&
                <>
                    Loading data error
                </>
            }

            {data &&
                <Converter {...data}/>
            }
        </>
    );
};

export default ConverterContainer;
