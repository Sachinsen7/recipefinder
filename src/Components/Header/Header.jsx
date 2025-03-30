import React, { use } from "react";
import imageee from "../../assets/imageee.png";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resipe, setRecipe] = useState([]);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    console.log("Menu Toggled");
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=2b35678998a946e8b0f175fbb5db167f"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div>
        <nav className="w-full bg-[#F5E8C7] fixed z-20 start-0 top-0 border-b border-gray-200 dark:border-gray-600 font-Poppins ">
          <div className="flex max-w-screen md:items-center flex-wrap justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse md:ml-32"
            >
              <img src={imageee} alt="" className="md:h-28 md:w-44 h-16" />
            </a>
            <div className="md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link
                to="/recipes"
                className="mr-36 hidden md:block text-white bg-[#E27D60] hover:bg-[#bd5c41] cursor-pointer focus:ring-4 focus:outline-none focus:to-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  "
                type="button"
              >
                Get Started
              </Link>
              <div className="relative w-full flex items-center justify-end md:hidden">
                <button
                  onClick={handleMenuToggle}
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 mt-3 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                >
                  {isMenuOpen ? (
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  )}
                </button>
                <ul
                  className={`absolute top-16 right-0 w-48 p-4 rounded-lg shadow-lg flex flex-col gap-3 z-50 transition-all duration-300 ease-in-out bg-[#F5E8C7] ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x opacity-0 pointer-events-none"
                  }`}
                >
                  {[
                    { name: "About", to: "/about" },
                    { name: "Recipes", to: "/recipes" },
                    { name: "Tips", to: "/tips" },
                    { name: "Community Resources", to: "/community" },
                  ].map(({ name, to }) => (
                    <li
                      key={name}
                      className="rounded-md px-3 py-2 transition-all duration-200 hover:bg-[#E27D60] hover:text-white"
                    >
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `block w-full ${
                            isActive
                              ? "text-[#E27D60] hover:text-[#eeeeee]"
                              : ""
                          } transition-colors duration-200`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
                <NavLink
                  to="/about"
                  className="block py-2 px-3 font-bold text-xl text-[#E27D60] rounded-sm md:bg-transparent"
                >
                  About
                </NavLink>
                <NavLink
                  to="/recipes"
                  className="block py-2 px-3 font-bold text-xl text-[#E27D60] rounded-sm md:hover:bg-transparent"
                >
                  Recipes
                </NavLink>
                <NavLink
                  to={"/tips"}
                  className="block py-2 px-3 font-bold text-xl text-[#E27D60] rounded-sm md:hover:bg-transparent"
                >
                  Tips
                </NavLink>
                <NavLink
                  to={"/community"}
                  className="block py-2 px-3 font-bold text-xl text-[#E27D60] rounded-sm md:hover:bg-transparent"
                >
                  Community Resources
                </NavLink>
              </ul>
            </div>
          </div>

          <div>
            <button></button>
          </div>
          {/* <button>Login</button> */}
        </nav>
      </div>
    </>
  );
}

export default Header;

//      https://api.spoonacular.com/recipes/random?apiKey=28f64f73b00b4f289f0e7c17134a8e02
