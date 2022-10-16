import React, {Fragment} from 'react';
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/24/outline";

const Header = () => {
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
                                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                    {/*{navigation.map((item) => (*/}
                                    {/*    <a*/}
                                    {/*        key={item.name}*/}
                                    {/*        href={item.href}*/}
                                    {/*        className={classNames(*/}
                                    {/*            item.current*/}
                                    {/*                ? 'border-indigo-500 text-gray-900'*/}
                                    {/*                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',*/}
                                    {/*            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'*/}
                                    {/*        )}*/}
                                    {/*        aria-current={item.current ? 'page' : undefined}*/}
                                    {/*    >*/}
                                    {/*        {item.name}*/}
                                    {/*    </a>*/}
                                    {/*))}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
};

export default Header;
