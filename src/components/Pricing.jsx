import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/Pricing";

import { smallSphere, stars } from "../assets";
import PricingList from "./PricingList";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="relative container z-2 ">
        <div className="hidden mb-[6.5rem] justify-center relative  lg:flex  ">
          <img
            src={smallSphere}
            alt="image"
            className="relative z-1  "
            width={255}
            height={255}
          />

          <div className="absolute top=1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[60rem] ">
            <img
              src={stars}
              alt="stars"
              className="w-full "
              width={950}
              height={950}
            />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center  mt-10">
          <a
            href="/pricing"
            className="font-bold font-code text-xs tracking-wider uppercase border-b"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
