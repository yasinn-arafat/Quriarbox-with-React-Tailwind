import React from "react";

const AllTitle = ({ headTitle, subTitle }) => {
  return (
    <>
      <div className="text-center">
        <h2 className="pb-3 text-3xl font-oxanium font-bold text-orangecolor">
          {headTitle ? headTitle : `SERVICES`}
        </h2>
        <h3 className="text-[40px] text-[#11111D] font-raleway font-extrabold ">
          {subTitle ? subTitle : `Our services for you`}
        </h3>
      </div>
    </>
  );
};

export default AllTitle;
