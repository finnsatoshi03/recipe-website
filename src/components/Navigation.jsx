/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

export default function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="container flex justify-between py-6 items-center font-sans text-black">
        <p className="hidden sm:flex">{props.userStatus || "Guest"}</p>
        <div className="items-center lg:gap-24 md:gap-12 sm:gap-6 absolute left-1/2 transform -translate-x-1/2 hidden sm:flex">
          <a href="#">Recipes</a>
          <img className="w-16" src="images/logo.png" alt="Tito Zah's Logo" />
          <a href="#">Contact</a>
        </div>
        <div className=" bg-black px-3.5 py-2 rounded-lg items-center gap-1 hover:cursor-pointer hidden sm:flex">
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/doodle/48/user.png"
            alt="user"
          />
          <a href="#" className="text-white200 text-xs">
            Sign Up
          </a>
        </div>
        <div className="flex justify-between items-center w-full sm:hidden m-auto">
          <img
            className="w-14 sm:hidden"
            src={`${!isOpen ? "images/logo.png" : "images/alt-logo.png"}`}
            alt="Tito Zah's Logo"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="sm:hidden hover:cursor-pointer mr-[3rem]"
            onClick={handleMenuClick}
          >
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
          </svg>
        </div>
      </div>
      {isOpen && (
        <div
          ref={navRef}
          className="fixed flex flex-col text-white200 text-sm right-0 top-0 h-full w-64 bg-green-500 p-4 bg-green rounded-tl-2xl rounded-bl-2xl z-10 py-8 px-7"
        >
          <div className="flex justify-between items-center gap-5 ">
            <img
              className="w-14 sm:hidden"
              src="images/alt-logo.png"
              alt="Tito Zah's Logo"
            />
            <p className="text-xl font-serif leading-5">Tito Zah's Kitchen</p>
          </div>
          <div className="flex justify-center m-auto mt-4 w-full h-[1px] bg-white200 mb-5 opacity-50"></div>
          <a href="#" className="mb-2 text-lg">
            Recipes
          </a>
          <a href="#" className="mb-2 text-lg">
            Contact
          </a>
          <div className="flex justify-center m-auto mt-4 w-full h-[1px] bg-white200 mb-5 opacity-50"></div>
          <div className=" bg-black px-3.5 py-2 rounded-lg items-center gap-1 flex justify-center hover:cursor-pointer">
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/doodle/48/user.png"
              alt="user"
            />
            <a href="#" className="text-white200 text-xs">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </>
  );
}
