import React from "react";
import Messegeimg from "../../assets/Messegeimg.png";
import Button from "../CommonComoponet/Button";
import { FaPaperPlane } from "react-icons/fa";

const Message = () => {
  return (
    <>
      <section className="body_bgcolor pb-32">
        <div className="container">
          <div className="flex justify-between w-[872px] m-auto">
            <div>
              <div>
                <picture>
                  <img src={Messegeimg} alt={Messegeimg} />
                </picture>
              </div>
              <h4 className=" pt-3 text-orangecolor text-2xl font-oxanium font-bold ">
                REQUEST A CALLBACK
              </h4>
              <h3 className=" pt-5 text-[#222132] text-[39px] font-raleway font-extrabold w-[412px] ">
                We will contact in the shortest time.
              </h3>
              <p className=" pt-2 text-[#9291A1] text-2xl font-raleway font-semibold">
                Monday to Friday, 9am-5pm.
              </p>
            </div>
            <div className=" pt-7 flex gap-y-4 items-center flex-col">
              <input
                type="text"
                placeholder="Name"
                className="py-[15px] pl-5 w-[423px] border-2 border-[#C5C5D2] bg-transparent rounded-lg placeholder:text-[#9291A1] placeholder:text-base placeholder:font-raleway placeholder:font-normal "
              />
              <input
                type="email"
                placeholder="Email"
                className="py-[15px] pl-5 w-[423px] border-2 border-[#C5C5D2] bg-transparent rounded-lg placeholder:text-[#9291A1] placeholder:text-base placeholder:font-raleway placeholder:font-normal "
              />
              <textarea
                name="comment"
                placeholder="Message"
                cols="20"
                rows="10"
                className="py-[15px] mb-14 pl-5 w-[423px] h-[154px] border-2 border-[#C5C5D2] bg-transparent rounded-lg placeholder:text-[#9291A1] placeholder:text-base placeholder:font-raleway placeholder:font-normal "
              ></textarea>
              <Button
                className={
                  "w-full py-3 bg-orangecolor rounded-md text-white text-xl font-oxanium font-bold hover:bg-[#222132] hover:ease-linear hover:duration-200 "
                }
              >
                Send Message <FaPaperPlane className="inline-block ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Message;
