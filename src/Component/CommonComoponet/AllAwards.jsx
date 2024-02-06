import React from "react";
import { GrTrophy } from "react-icons/gr";

const AllAwards = ({ icon__pass, count, awardTitle }) => {
  return (
    <>
      <div className="flex justify-between items-center flex-col ">
        <div className="hover:text-orangecolor">
          <a href="#"> {icon__pass ? icon__pass : <GrTrophy />}</a>
        </div>
        <h3 className=" pt-7  text-4xl font-oxanium  font-extrabold text-orangecolor ">
          {count}
        </h3>
        <h4 className="pt-2 font-raleway font-bold text-xl text-[#464558] ">
          {awardTitle}
        </h4>
      </div>
    </>
  );
};

export default AllAwards;
