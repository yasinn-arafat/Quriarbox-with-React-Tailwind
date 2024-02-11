import React from "react";
import Button from "../CommonComoponet/Button";

const Subscribe = () => {
  return (
    <>
      <section className="bg-[#222132] py-20 ">
        <div className="container">
          <div className="flex justify-between item-center">
            <div>
              <h4 className=" pb-4 text-[39px] text-white font-raleway font-extrabold ">
                Get an update every week
              </h4>
              <p className="w-[500px]  text-[#C5C5D2] text-base font-raleway font-normal">
                We ensure that your product is delivered in the safest possible
                manner, at the correct location, at the right time.
              </p>
            </div>
            <div>
              <h5 className=" pt-2 pb-3 text-orangecolor text-[19px] font-oxanium font-bold">
                SUBSCRIBE TO NEWSLETTER
              </h5>
              <div className="">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-[15px] px-5 mr-4 w-[386px] text-white bg-transparent border-[1px] border-[#C5C5D2] placeholder:text-base placeholder:font-raleway placeholder:font-semibold rounded-md "
                />
                <Button
                  className={
                    "px-5 py-[14px] bg-orangecolor text-white text-xl font-oxanium font-bold rounded-md"
                  }
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
