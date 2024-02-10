import React from "react";
import AllTitle from "../CommonComoponet/AllTitle";
import Button from "../CommonComoponet/Button";
import { GrLocation } from "react-icons/gr";
import { TbClockHour3 } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <section className="body_bgcolor pb-36 ">
        <div className="container">
          <div className="pb-20">
            <AllTitle headTitle={"FIND US"} subTitle={"Access us easily"} />
          </div>
          <div className="flex justify-between pb-12">
            <div className="h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1467488049725!2d90.37981477507222!3d23.742145789093666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b067dbaf61%3A0x75c5b9a41c0b3c4a!2sCreative%20IT%20Institute%20(Campus%202)!5e0!3m2!1sen!2sbd!4v1707128460954!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="h-[450px] w-[536px] px-[88px] py-20 bg-[#FEFCFA] ">
              <h4 className=" text-[#464558] text-xl font-raleway font-bold">
                Contact with us
              </h4>
              <ul className="pt-10 pb-12">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-x-3 text-[#5C5B6C] text-base font-raleway font-normal pb-4 "
                  >
                    <GrLocation className="text-2xl text-[#FFAF0F]" /> 2277
                    Lorem Ave, San Diego, CA 22553
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex  gap-x-3 text-[#5C5B6C] text-base font-raleway font-normal pr-11 pb-4 "
                  >
                    <TbClockHour3 className="text-4xl text-[#FFAF0F]" />
                    Monday - Friday: 10 am - 10pm Sunday: 11 am - 9pm
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@quriarbox.com"
                    className="flex items-center gap-x-3 text-[#5C5B6C] text-base font-raleway font-normal v "
                  >
                    <FiMail className="text-2xl text-[#FFAF0F]" />
                    info@quriarbox.com
                  </a>
                </li>
              </ul>

              <div className="flex items-center gap-x-4 ">
                <a
                  href="#"
                  className="text-3xl text-[#222132] hover:text-orangecolor hover:duration-200 hover:ease-linea"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="#"
                  className="text-3xl text-[#222132] hover:text-orangecolor hover:duration-200 hover:ease-linea"
                >
                  <AiFillInstagram />
                </a>
                <a
                  href="#"
                  className="text-3xl text-[#222132] hover:text-orangecolor hover:duration-200 hover:ease-linea"
                >
                  <FaSquareXTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              className={
                " px-28 py-5 bg-orangecolor hover:bg-[#222132] hover:duration-200 hover:ease-linear rounded-md"
              }
            >
              <p className="flex items-center justify-center gap-x-4 text-white text-xl font-oxanium font-bold">
                <IoMdCall className=" text-4xl" /> Call us to delivery
                123-456789
              </p>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
