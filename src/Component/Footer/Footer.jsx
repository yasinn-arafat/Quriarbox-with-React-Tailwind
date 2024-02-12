import React from "react";
import FooterLogo from "../../assets/FooterLogo.png";

const Footer = () => {
  return (
    <>
      <section className="bg-[#2F2E41] py-14">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <div>
                <picture>
                  <img src={FooterLogo} alt={FooterLogo} />
                </picture>
              </div>
              <p className="pt-3 w-48 text-[#9291A1] text-base font-raleway font-semibold">
                The most trusted Courier company in your area.
              </p>
            </div>
            <div className="flex justify-between items-center gap-x-32">
              <div>
                <h5 className="text-white text-xl font-oxanium font-bold">
                  Other links
                </h5>
                <ul className="pt-6 text-[#9291A1] text-base font-raleway font-bold">
                  <li className="pb-2 hover:text-orangecolor">
                    <a href="#">Blogs</a>
                  </li>
                  <li className="pb-2 hover:text-orangecolor">
                    <a href="#">Movers website</a>
                  </li>
                  <li className="pb-2 hover:text-orangecolor">
                    <a href="#">Traffic Update</a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-white text-xl font-oxanium font-bold">
                  Services
                </h5>
                <ul className="pt-6 text-[#9291A1] text-base font-raleway font-bold">
                  <li className="pb-2 hover:text-orangecolor">
                    <a href="#">Corporate goods</a>
                  </li>
                  <li className="pb-2 hover:text-orangecolor">
                    <a href="#">Artworks</a>
                  </li>
                  <li className="pb-2 hover:text-orangecolor">
                    <a href="#">Documents</a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-white text-xl font-oxanium font-bold">
                  Customer Care
                </h5>
                <ul className="pt-6 text-[#9291A1] text-base font-raleway font-bold">
                  <li className="pb-2 hover:text-orangecolor">
                    <a href="#">About Us</a>
                  </li>
                  <li className="pb-2 hover:text-orangecolor">
                    <a href="#">Contact US</a>
                  </li>
                  <li className="pb-2 hover:text-orangecolor">
                    <a href="#">Get Update</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
