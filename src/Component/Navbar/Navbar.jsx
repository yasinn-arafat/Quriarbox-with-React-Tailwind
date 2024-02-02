import React from "react";
import Logo from "../../assets/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
import Button from "../CommonComoponet/Button";

const Navbar = () => {
  return (
    <>
      <nav className="navbar py-7 bg-gradient-to-r from-navbgfrom via-navbgvia to-navbgto shadow-lg ">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="nav__logo">
              <picture>
                <img src={Logo} alt={Logo} />
              </picture>
            </div>
            <div className="nav__menu flex  items-center gap-x-7">
              <ul className="flex items-center gap-x-6">
                <li>
                  <a
                    href="#"
                    className="text-graycolor text-base font-raleway font-bold hover:text-orangecolor transition ease-linear delay-150"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-graycolor text-base font-raleway font-bold hover:text-orangecolor transition ease-linear delay-150"
                  >
                    Our services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-graycolor text-base font-raleway font-bold hover:text-orangecolor transition ease-linear delay-150"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-graycolor text-base font-raleway font-bold hover:text-orangecolor transition ease-linear delay-150"
                  >
                    What’s new?
                  </a>
                </li>
              </ul>

              <div className="nav__contact flex gap-x-2 items-center">
                <div className="p-[13px] bg-[#FFEDC9] rounded-md">
                  <IoSearchOutline className="text-2xl text-yellowcolor" />
                </div>

                <div>
                  <Button
                    className={
                      "py-3 px-5 text-orangecolor bg-[#FFE4D9] text-xl font-bold font-raleway rounded-md "
                    }
                  >
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
