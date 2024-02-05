import React from "react";
import AllTitle from "../CommonComoponet/AllTitle";
import Cards from "../CommonComoponet/Cards";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { AiTwotoneShop } from "react-icons/ai";
import { BsBackpack4 } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <section className="services body_bgcolor">
        <div className="container">
          <AllTitle headTitle={"SERVICES"} subTitle={"Our services for you"} />
          <div className="flex items-center gap-x-6 pt-20">
            <Cards
              icon={<MdOutlineBusinessCenter />}
              card__title={"Business Services"}
              card__details={`We give you complete reliable delivery for your company. We will take
            full responsibility of the deliveries.`}
              li_one={`Corporate goods`}
              li_two={`Shipment`}
              li_three={`Accesories`}
            />
            <Cards
              icon={<AiTwotoneShop />}
              card__title={"Statewide Services"}
              card__details={`Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.`}
              li_one={`Personal items`}
              li_two={`Percels`}
              li_three={`Documents`}
            />
            <Cards
              icon={<BsBackpack4 />}
              card__title={"Personal Services"}
              card__details={`You can trust us to safely deliver your most sensitive documents to the specific area in a short time.`}
              li_one={`Gifts`}
              li_two={`Package`}
              li_three={`Documents`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
