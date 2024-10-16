import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import {useState} from 'react';

export const Navbar = ({ children }) => {
  const { cart } = useSelector((state) => state);
  const [tray,setTray] = useState(false);
  return (
    <>
      <nav className="flex flex-row justify-between items-center h-20 bg-[#0f172a] w-screen sticky top-0 z-50">
        <NavLink to="/">
          <div className="md:ml-16 ml-4">
            <h1 className="text-purple-400 hover:text-green-600 rounded-full font-bold text-xl border p-2 border-green-800 ">
              ShopDapp
            </h1>
          </div>
        </NavLink>
        <div className="md:flex items-center font-medium text-slate-100 mr-16 space-x-6 hidden">
          <NavLink
            to="/"
            className="hover:text-green-600 hover:scale-110 transition-all duration-300 p-2"
          >
            <p>Home</p>
          </NavLink>
          {<NavLink
            to="/order"
            className="hover:text-green-600 hover:scale-110 transition-all duration-300 p-2"
          >
            <p>Order</p>
          </NavLink> }

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl hover:text-green-600 hover:scale-110 transition-all duration-300" />
              {cart.length > 0 && (
                <span className="absolute -top-3 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white -right-2">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>

          <NavLink
            to="/wallet"
            className="hover:scale-110 transition-all duration-300 p-3 rounded-full bg-[#0f111d]"
          >
            <Wallet />
          </NavLink>
        </div>
        <HamburgerIcon
          action={() => {
            setTray(!tray);
          }}
        />
        <div
          className={`transition-all duration-700 w-10/12 h-screen bg-white absolute top-0 right-0 z-50 ${
            tray ? "translate-x-0" : "translate-x-full"
          } border-2`}
        >
          <CrossIcon
            action={() => {
              setTray(!tray);
            }}
          />
          <NavLink
            to="/"
            className="hover:text-green-600 hover:scale-110 transition-all duration-300"
            onClick={() => {
              setTray(!tray);
            }}
          >
            <p className="font-semibold text-lg py-2 px-8">Home</p>
          </NavLink>
          <NavLink
            to="/order"
            className="hover:text-green-600 hover:scale-110 transition-all duration-300"
            onClick={() => {
              setTray(!tray);
            }}
          >
            <p className="font-semibold text-lg py-2 px-8">Order</p>
          </NavLink>
          <NavLink
            to="/cart"
            className="hover:text-green-600 hover:scale-110 transition-all duration-300"
            onClick={() => {
              setTray(!tray);
            }}
          >
            <p className="font-semibold text-lg py-2 px-8 relative">
              Cart{" "}
              {cart.length > 0 && (
                <span className="absolute top-3 left-[4.5rem] bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </p>
          </NavLink>
          <NavLink
            to="/wallet"
            className="hover:text-green-600 hover:scale-110 transition-all duration-300"
            onClick={() => {
              setTray(!tray);
            }}
          >
            <p className="font-semibold text-lg py-2 px-8">Wallet</p>
          </NavLink>
        </div>
      </nav>
      <main className="w-screen">{children}</main>
    </>
  );
};

const Wallet = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 397.7 311.7"
      className="aspect-square h-5"
      style={{ enableBackground: "new 0 0 397.7 311.7" }}
    >
      <style type="text/css">
        {`
          .st0 { fill: url(#SVGID_1_); }
          .st1 { fill: url(#SVGID_2_); }
          .st2 { fill: url(#SVGID_3_); }
        `}
      </style>
      <defs>
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="360.8791"
          y1="351.4553"
          x2="141.213"
          y2="-69.2936"
          gradientTransform="matrix(1 0 0 -1 0 314)"
        >
          <stop offset="0" style={{ stopColor: "#00FFA3" }} />
          <stop offset="1" style={{ stopColor: "#DC1FFF" }} />
        </linearGradient>
        <linearGradient
          id="SVGID_2_"
          gradientUnits="userSpaceOnUse"
          x1="264.8291"
          y1="401.6014"
          x2="45.163"
          y2="-19.1475"
          gradientTransform="matrix(1 0 0 -1 0 314)"
        >
          <stop offset="0" style={{ stopColor: "#00FFA3" }} />
          <stop offset="1" style={{ stopColor: "#DC1FFF" }} />
        </linearGradient>
        <linearGradient
          id="SVGID_3_"
          gradientUnits="userSpaceOnUse"
          x1="312.5484"
          y1="376.688"
          x2="92.8822"
          y2="-44.061"
          gradientTransform="matrix(1 0 0 -1 0 314)"
        >
          <stop offset="0" style={{ stopColor: "#00FFA3" }} />
          <stop offset="1" style={{ stopColor: "#DC1FFF" }} />
        </linearGradient>
      </defs>
      <path
        className="st0"
        d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
      />
      <path
        className="st1"
        d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
      />
      <path
        className="st2"
        d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
      />
    </svg>
  );
};
const HamburgerIcon = ({ action }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#fff"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="aspect-square h-10 w-10 cursor-pointer md:hidden block mr-4"
      onClick={action}
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
};

const CrossIcon = ({ action }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="aspect-square h-10 w-10 cursor-pointer m-4"
      onClick={action}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

