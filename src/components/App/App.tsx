import React from 'react';

import Layout from "../Layout/Layout";
import {useGetCurrencyQuery} from "../../services/CurrencyService";




const App = () => {

    const { data, isError, isLoading } = useGetCurrencyQuery("USD")
    console.log(data)
    return (
    <>
        <Layout pageName={'Converter'} >

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
                <>
                    data
                </>
            }

        </Layout>
    </>
    );
};

export default App;
