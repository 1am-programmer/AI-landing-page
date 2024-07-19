import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10" id="footer">
      <div className="container flex  sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-n-4 caption">
          &copy; {new Date().getFullYear()}. All rights reserved{" "}
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((social) => (
            <a
              href={social.url}
              key={social.id}
              target="_blank"
              className="flex items-center justify-center rounded-full w-10 h-10 bg-n-7 hover:bg-n-6 transition-colors"
            >
              <img
                src={social.iconUrl}
                width={16}
                height={16}
                alt={social.title}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
