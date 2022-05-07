import React from 'react';
import { Outlet } from 'react-router-dom';
import ActiveLink from '../../HomePages/NavBar/ActiveLink';

const ManageInventory = () => {
    return (
        <div className="flex">
          <div className="w-1/3 bg-[#151515] h-auto text-gray-100 px-2">
            <ul className="md:ml-4">
              <li className="pt-6">
                <ActiveLink to="mangeItems">
                  <p className="flex items-center text-xs md:text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    MANAGE ITEMS
                  </p>
                </ActiveLink>
              </li>
              <li className="my-6">
                <ActiveLink to="myinventory">
                  <p className="flex items-center text-xs md:text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"
                      />
                    </svg>
                    MY INVENTORY
                  </p>
                </ActiveLink>
              </li>
              <li className="my-6">
                <ActiveLink to="addItem">
                  <p className="flex items-center text-xs md:text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    ADD NEW ITEM
                  </p>
                </ActiveLink>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-11/12 mx-auto">
            <Outlet />
          </div>
        </div>
      );
    };

export default ManageInventory;