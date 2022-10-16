import React, {Fragment, useEffect, useState} from 'react';
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {useGetCurrencyQuery} from "../../../services/CurrencyService";
import {getValidCurrency} from "../../../utils/getValidCurrency";



const Header = () => {
    const { data, isError, isLoading } = useGetCurrencyQuery("USD");

    return (
        <Disclosure as="nav" className="bg-white shadow-sm">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                        alt="Workflow"
                                    />
                                </div>
                            </div>
                            <div className="ml-6 flex items-center">
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
                                    <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                                        <div>USD: {getValidCurrency(data.rates.USD)}</div>
                                        <span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
                                        &middot;
                                    </span>
                                        <div>EUR: {getValidCurrency(data.rates.EUR)}</div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>

    );
};

export default Header;
