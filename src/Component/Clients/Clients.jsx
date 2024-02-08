import React from "react";
import AllTitle from "../../Component/CommonComoponet/AllTitle";
import Stars from "../../assets/Stars.png";
import WomenImg from "../../assets/Women.png";

const Clients = () => {
  return (
    <>
      <section className="body_bgcolor pb-32 ">
        <div className="container">
          <div>
            <div className="relative after:absolute after:content-Icon after:top-0 after:left-[253px] after:w-28 after:h-28">
              <AllTitle
                headTitle={"TESTIMONIAL"}
                subTitle={"Our Awesome Clients"}
              />
            </div>
            <div className=" mt-20 w-[872px] h-[304px] bg-white m-auto px-[37px] py-10">
              <h4 className="pb-3 text-2xl text-orangecolor font-raleway font-bold ">
                Fantastic service!
              </h4>
              <p className="text-base text-[#464558] font-raleway font-normal">
                I purchased a phone from an e-commerce site, and this courier
                service provider assisted me in getting it delivered to my home.
                I received my phone within one day, and I was really satisfied
                with their service when I received it. They are really quick and
                dependable. They give me with the option of real-time delivery
                status, which allows me to track the progress of my goods
                delivery. I get a lot of questions from call center support and
                key account managers. They come highly recommended. Confidently
                say that they are really reliable.
              </p>

              <div className="flex justify-between items-center pt-4 ">
                <div>
                  <picture>
                    <img src={Stars} alt={Stars} />
                  </picture>
                </div>

                <div className="flex gap-x-3 items-center">
                  <div className="text-base font-raleway ">
                    <h5 className=" text-end text-[#222132] font-bold">
                      Yves Tanguy
                    </h5>
                    <h6 className=" text-[#464558] font-normal">
                      Chief Executive, DLF
                    </h6>
                  </div>
                  <div>
                    <picture>
                      <img src={WomenImg} alt={WomenImg} />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
