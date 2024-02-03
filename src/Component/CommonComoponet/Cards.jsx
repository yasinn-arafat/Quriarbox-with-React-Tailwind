import React from "react";
import Button from "./Button";
import { GrDocumentMissing } from "react-icons/gr";

const Cards = ({
  icon,
  card__title,
  card__details,
  li_one,
  li_two,
  li_three,
}) => {
  return (
    <>
      <div className="card w-1/3 px-14 py-16 bg-white rounded-2xl hover:cursor-pointer hover:-translate-y-3  transiton ease-linear duration-200 ">
        <div className=" text-center ">
          <div>
            <span className="icon__overlay inline-block text-6xl text-orangecolor ">
              {icon ? icon : <GrDocumentMissing className="text-black" />}
            </span>
          </div>
          <h3 className=" mt-7 pb-8 text-2xl text-[#464558] font-raleway font-extrabold">
            {card__title ? card__title : "Loading"}
          </h3>
        </div>
        <p className=" pb-8 text-[#7B7A8B] text-base leading-7  font-raleway font-normal ">
          {card__details ? card__details : "wait"}
        </p>
        <ul className=" pb-14 text-[#7B7A8B] font-raleway font-normal text-base">
          <li className="service__list">{li_one}</li>
          <li className="service__list">{li_two}</li>
          <li className="service__list">{li_three}</li>
        </ul>
        <div className="text-center ">
          <Button
            className={
              " py-3 w-full bg-orangecolor bg-transparent border border-orangecolor  rounded-md text-orangecolor text-xl font-oxanium font-bold hover:text-white hover:bg-orangecolor transition duration-300 ease-linear"
            }
          >
            Learn more
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cards;
