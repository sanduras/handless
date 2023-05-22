import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

import logo from "../../assets/logo.jpg";
import menuItems from "./menuItems";

const MainLayout = () => {
    const [customOpen, setCustomOpen] = useState(false);
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
              <img src={logo} className=" mr-3" alt="logo" />
            </Link>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <FiMenu />
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-dropdown"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {menuItems.map((link) => (
                  <>
                    {link.children ? (
                      <Menu as="div"  className="relative inline-block text-left">
                        <div >
                          <Menu.Button  className="inline-flex w-full justify-center items-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            {" "}
                            {link.label}
                         
                          <FiChevronDown
                            className="ml-2 -mr-1 h-5 w-5  text-slate-800 font-medium"
                            aria-hidden="true"
                          />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items static className="text-slate-800 absolute text-center p-1 right-0 mt-4 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {link.children.map((child) => (
                              <div className="px-1 py-1 " key={child.key}>
                                <Menu.Item  >
                                  {({ active }) => (
                                    <Link
                                      clLinkssName={`${
                                        active && "bg-blue-500"
                                      }`}
                                      to={child.href}
                                    >
                                      {child.label}
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <Link to={link.href} key={link.key} className="text-slate-800">
                        {link.label}
                      </Link>
                    )}
                  </>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
