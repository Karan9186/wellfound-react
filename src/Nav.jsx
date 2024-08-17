import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isResource, setIsResource] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="absolute px-4 py-4 w-full z-10">
        <div className="px-3 py-3 bg-white rounded-xl shadow-md border border-slate-200 shadow-xl shadow-[rgba(125,_110,_235,_0.5)] flex items-center justify-between">
          <h1 className="text-2xl">
            <span className="text-[rgba(127,110,252)]">N</span>AV
            <span className="text-[rgba(127,110,252)]">B</span>AR
          </h1>
          <h1 className="block md:hidden" onClick={() => setNavbar(true)}>
            <MdOutlineMenu size={"26px"} />
          </h1>
          <div className="hidden md:block">
            <ul className="flex gap-8 items-center">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <button
                  id="dropdownDefaultButton"
                  onClick={toggleDropdown}
                  className="text-black flex items-center"
                  type="button"
                >
                  Products{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdown"
                  className={`z-10 ${
                    isDropdownOpen ? "block" : "hidden"
                  } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute border border-slate-200 shadow-xl shadow-blue-100`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownDefaultButton"
                  onClick={() => setIsResource(!isResource)}
                  className="text-black flex items-center"
                  type="button"
                >
                  Resources{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdown"
                  className={`z-10 ${
                    isResource ? "block" : "hidden"
                  } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute border border-slate-200 shadow-xl shadow-blue-100`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div className=" hidden md:block flex items-center ">
            <button className="border border-[rgba(127,110,252)] rounded px-3 py-1 bg-slate-100 text-[rgba(127,110,252)] font-semibold mx-4">
              Log in
            </button>
            <button className="px-3 py-1 font-semibold bg-[rgba(127,110,252)] rounded text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
      {/* responsive navbar */}
      <div
        className={`${
          navbar ? "block" : "hidden"
        } bg-slate-100 shadow-xl overflow-hidden shadow-blue-400 absolute right-0 p-5 w-[240px]  h-[100%]`}
        style={{ zIndex: "120" }}
      >
        <button
          className="absolute right-10 top-4"
          onClick={() => setNavbar(false)}
        >
          <RxCross2 />
        </button>
        <br />
        <br />
        <ul className="flex flex-col gap-8 items-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-black flex items-center"
              type="button"
            >
              Products{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 ${
                isDropdownOpen ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute border border-slate-200 shadow-xl shadow-blue-100`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              id="dropdownDefaultButton"
              onClick={() => setIsResource(!isResource)}
              className="text-black flex items-center"
              type="button"
            >
              Resources{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 ${
                isResource ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute border border-slate-200 shadow-xl shadow-blue-100`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <br />
        <br />
        <div className=" flex gap-4 flex-col items-center ">
          <button className="border border-[rgba(127,110,252)] rounded px-3 py-1 bg-slate-100 text-[rgba(127,110,252)] font-semibold mx-4 w-full">
            Log in
          </button>
          <button className="px-3 w-full py-1 font-semibold bg-[rgba(127,110,252)] rounded text-white">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
