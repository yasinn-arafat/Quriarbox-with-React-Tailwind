import React from "react";

const Copyright = () => {
  return (
    <>
      <section className="bg-[#222132] py-[30px]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <h6 className="text-[#DBDBE9] text-[14px] font-raleway font-medium ">
                All rights Reserved © Your Company, 2021
              </h6>
            </div>
            <div>
              <h6 className="text-[#E0DEDE] text-[14px] font-raleway font-medium ">
                Made with heart by{" "}
                <span className=" text-orangecolor">ThemeWagon</span>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Copyright;
