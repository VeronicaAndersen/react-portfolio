import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, techstack, imageSrc, link }) => {
  return (
    <div className="text-left bg-white rounded-2xl shadow-md overflow-hidden my-2">
      <img
        src={imageSrc}
        alt={title}
        className="w-full rounded-t-2xl block"
      />
      <div className="p-4">
        <h2 className="text-2xl text-black mb-2 font-semibold">{title}</h2>
        <p className="text-base text-black mb-2">{description}</p>
        <p className="text-base text-black mb-2">
          <span className="font-bold">Tech Stack:</span> {techstack}
        </p>
        <div className="flex items-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#60958f] underline text-base mr-2"
          >
            Explore site
          </a>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </div>
      </div>
    </div>
  );
};

export default Card;
