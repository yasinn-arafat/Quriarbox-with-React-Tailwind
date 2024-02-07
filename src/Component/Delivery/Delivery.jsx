import React from "react";
import { IoIosPlay } from "react-icons/io";

const Delivery = () => {
  return (
    <>
      <section className="body_bgcolor pb-32">
        <div className="container">
          <div className=" bg-[url(./src/assets/Deliveryimg.png)] bg-cover bg-center bg-no-repeat h-[580px] rounded-2xl relative">
            <div className=" absolute w-full top-0 left-0  h-full bg-[rgba(10,9,13,0.71)] rounded-2xl flex justify-center items-center flex-col hover:cursor-pointer hover:bg-transparent transition duration-300 ease-linear  ">
              <div className=" w-16  h-16 rounded-full bg-orangecolor flex justify-center items-center">
                <IoIosPlay className=" text-white  text-[39px] " />
              </div>
              <h3 className=" pt-6 text-orangecolor text-3xl font-oxanium font-bold">
                FASTEST DELIVERY
              </h3>
              <div className=" pt-7 text-center text-white text-2xl font-raleway font-medium w-[650px]">
                <p>You can get your valuable item in the fastest period of</p>
                <p>time with safety. Because your emergency</p>
                <p>is our first priority.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Delivery;
