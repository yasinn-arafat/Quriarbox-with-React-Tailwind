import React from "react";
import Button from "../../Component/CommonComoponet/Button";
import { FaArrowRight } from "react-icons/fa";
import BannerImg from "../../assets/bannerimage.png";

const Banner = () => {
  return (
    <>
      <section className="banner body_bgcolor py-36">
        <div className="container">
          <div className="flex justify-between">
            <div className="w-2/5  ">
              <h1 className="mt-4 text-5xl font-normal text-[#261134] font-raleway leading-tight">
                A trusted provider of
                <span className="font-extrabold text-[#261134]">
                  {" "}
                  courier services.
                </span>
              </h1>
              <p className="pt-4 pr-44 pb-10 text-xl font-raleway font-normal leading-6">
                We deliver your products safely to your home in a reasonable
                time.
              </p>
              <Button
                className={
                  "flex items-center px-5 py-3 bg-orangecolor text-white font-oxanium  font-bold text-xl rounded-md hover:bg-[#222132] hover:ease-linear hover:duration-200 "
                }
              >
                Get started <FaArrowRight className="pl-2 text-2xl " />
              </Button>
            </div>
            <div className="w-3/5">
              <picture>
                <img src={BannerImg} alt={BannerImg} />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
