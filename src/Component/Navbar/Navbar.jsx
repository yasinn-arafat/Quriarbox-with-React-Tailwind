import React from "react";
import Logo from "../../assets/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
import Button from "../CommonComoponet/Button";

const Navbar = () => {
  return (
    <>
      <nav className="navbar py-7">
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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Our services</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">What’s new?</a>
                </li>
              </ul>

              <div className="nav__contact flex gap-x-6 items-center">
                <IoSearchOutline />

                <div>
                  <Button>Contact us</Button>
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
