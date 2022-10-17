import React from 'react';

import Layout from "../Layout/Layout";
import Converter from "../Converter/Converter";
import ConverterContainer from "../Converter/ConverterContainer";




const App = () => {


    return (
    <>
        <Layout pageName={'Converter'} >

            <ConverterContainer />

        </Layout>
    </>
    );
};

export default App;
