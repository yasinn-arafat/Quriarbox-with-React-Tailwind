import React from "react";
import AllAwards from "../CommonComoponet/AllAwards";
import { GrTrophy } from "react-icons/gr";
import { IoMapOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineBusinessCenter } from "react-icons/md";

const Award = () => {
  return (
    <>
      <section className="Award py-36 body_bgcolor">
        <div className="container">
          <div className="flex justify-between items-center">
            <AllAwards
              icon__pass={<GrTrophy className=" text-6xl" />}
              count={"26+"}
              awardTitle={"Awards  won"}
            />

            <AllAwards
              icon__pass={<IoMapOutline className=" text-6xl" />}
              count={"65+"}
              awardTitle={"States covered"}
            />
            <AllAwards
              icon__pass={<GrUserManager className=" text-6xl" />}
              count={"689K+"}
              awardTitle={"Happy clients"}
            />
            <AllAwards
              icon__pass={<FaTruckFast className=" text-6xl" />}
              count={"130M+"}
              awardTitle={"Goods delivered"}
            />
            <AllAwards
              icon__pass={<MdOutlineBusinessCenter className=" text-6xl" />}
              count={"130M+"}
              awardTitle={"Business hours"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;
